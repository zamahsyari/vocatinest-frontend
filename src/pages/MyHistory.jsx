import React from "react";
import Template from "../components/DashboardTemplate";
import { Row, Col, Form, Button } from "react-bootstrap";
import background from "../assets/background.jpg";
import profile from "../assets/profile_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSchools, fetchSpecialization } from "../redux/middleware";

const mapStateToProps = state => {
  return {
    schools: state.schools.data,
    specializations: state.schools.specializations
  };
};

class MyHistory extends React.Component {
  getMonths() {
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
    let monthIndexes = [];
    for (let i = 1; i <= 12; i++) {
      monthIndexes.push(i);
    }
    return months.map((item, i) => {
      if (i < 10) {
        return (
          <option key={i} value={"0" + (i + 1)}>
            {item}
          </option>
        );
      } else {
        return (
          <option key={i} value={i + 1}>
            {item}
          </option>
        );
      }
    });
  }
  getYears() {
    let years = [];
    let now = new Date();
    for (let i = 1900; i <= now.getFullYear(); i++) {
      years.push(i);
    }
    return years.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  }
  componentDidMount() {
    this.props.dispatch(fetchSchools(this.state));
  }
  render() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    const lightBlue = "#67a4e5";
    const lightestBlue = "#bbdcff";
    const ContentDiv = styled.div`
      background-color: white;
      padding: 32px;
      border-radius: 16px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0px 0px 5px #777;
        ul{
          margin-left: -40px;
          text-align: left;
          li{
            list-style: none;
            display: inline-block;
            color: ${darkBlue};
            font-weight: 600;
            .circle{
              background-color: ${darkBlue}
              padding: 4px;
              border-radius: 50%;
              height: 42px;
              width: 42px;
              text-align:center;
              color: white;
              font-size: 18pt;
            }
            &:first-child{
              margin-right: 32px;
            }
            &:last-child{
              float:right;
              font-size:17pt;
              margin-top: 8px;
            }
          }
        }
        .content{
          margin-left: 72px;
          .form-group{
            text-align: left;
            .form-label{
              color: #555;
            }
            .secondary-label{
              color: ${darkBlue}
              margin-top: 16px;
            }
          }
        }
      `;

    const toBase64 = file =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

    const Uploads = () => {
      return (
        <ContentDiv>
          <ul>
            <li>
              <div className="circle">1</div>
            </li>
            <li>Unggah Foto</li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </li>
          </ul>
          <div className="content">
            <Form.Group>
              <Form.Label>Unggah Foto Diri</Form.Label>
              <Form.Control
                type="file"
                onChange={async e => {
                  const file = e.target.files[0];
                  const encoded = await toBase64(file);
                  localStorage.setItem("image", encoded);
                }}
              />
              <Form.Label className="secondary-label">
                * format .jpg, .png max 10 MB
              </Form.Label>
            </Form.Group>
          </div>
        </ContentDiv>
      );
    };

    const getGraduateYear = () => {
      let now = new Date().getFullYear();
      let years = [];
      for (let i = now; i < now + 4; i++) {
        years.push(i);
      }
      return years.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    };

    const renderSchools = data => {
      return data.map(item => {
        return (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        );
      });
    };

    const renderSpecialization = data => {
      return data.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    };

    const renderSex = val => {
      if (localStorage.getItem("sex") !== val) {
        return false;
      }
      return true;
    };

    const renderGrade = val => {
      if (parseInt(localStorage.getItem("grade")) !== val) {
        return false;
      }
      return true;
    };

    const Biography = () => {
      return (
        <ContentDiv>
          <ul>
            <li>
              <div className="circle">2</div>
            </li>
            <li>Biografi Professional</li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </li>
          </ul>
          <div className="content">
            <Form.Group>
              <Form.Check
                name="sex"
                inline
                type="radio"
                value="M"
                label="Laki-Laki"
                defaultChecked={renderSex("M")}
                onChange={e => localStorage.setItem("sex", e.target.value)}
              />
              <Form.Check
                name="sex"
                inline
                type="radio"
                value="F"
                label="Perempuan"
                defaultChecked={renderSex("F")}
                onChange={e => localStorage.setItem("sex", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pilih Nama SMK</Form.Label>
              {/* <Form.Control
                as="select"
                onChange={e => {
                  let content = e.target.options[e.target.selectedIndex].text;
                  console.log(content);
                  localStorage.setItem("school", content);
                  localStorage.setItem("school_id", e.target.value);
                  this.props.dispatch(
                    fetchSpecialization(e.target.value, this.props.schools)
                  );
                }}
              >
                <option>Pilih nama SMK</option>
                {renderSchools(this.props.schools)}
              </Form.Control> */}
              <Form.Control
                value={localStorage.getItem("school")}
                onChange={e => localStorage.setItem("school", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Kejuruan</Form.Label>
              {/* <Form.Control
                as="select"
                onChange={e =>
                  localStorage.setItem("school_specialization", e.target.value)
                }
              >
                <option>Pilih kejuruan</option>
                {renderSpecialization(this.props.specializations)}
              </Form.Control> */}
              <Form.Control
                value={localStorage.getItem("school_specialization")}
                onChange={e =>
                  localStorage.setItem("school_specialization", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Kelas</Form.Label>
              <br />
              <Form.Check
                inline
                name="gradeCheck"
                type="radio"
                value="10"
                label="10"
                defaultChecked={renderGrade(10)}
                onChange={e => localStorage.setItem("grade", e.target.value)}
              />
              <Form.Check
                inline
                name="gradeCheck"
                type="radio"
                value="11"
                label="11"
                defaultChecked={renderGrade(11)}
                onChange={e => localStorage.setItem("grade", e.target.value)}
              />
              <Form.Check
                inline
                name="gradeCheck"
                type="radio"
                value="12"
                label="12"
                defaultChecked={renderGrade(12)}
                onChange={e => localStorage.setItem("grade", e.target.value)}
              />
              <Form.Check
                inline
                name="gradeCheck"
                type="radio"
                value="99"
                label="Sudah lulus"
                defaultChecked={renderGrade(99)}
                onChange={e => localStorage.setItem("grade", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tahun Lulus/Target Lulus</Form.Label>
              <Form.Control
                as="select"
                value={localStorage.getItem("graduate_year")}
                onChange={e =>
                  localStorage.setItem("graduate_year", e.target.value)
                }
              >
                <option>Pilih tahun</option>
                {getGraduateYear()}
              </Form.Control>
            </Form.Group>
          </div>
        </ContentDiv>
      );
    };

    const JobExperience = () => {
      return (
        <ContentDiv>
          <ul>
            <li>
              <div className="circle">3</div>
            </li>
            <li>Pengalaman Organisasi</li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </li>
          </ul>
          <div className="content">
            <Form.Group>
              <Form.Label>Peran di organisasi</Form.Label>
              <Form.Control
                placeholder="Masukkan peran"
                value={localStorage.getItem("organization_role")}
                onChange={e =>
                  localStorage.setItem("organization_role", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nama Organisasi</Form.Label>
              <Form.Control
                placeholder="Masukkan nama organisasi"
                value={localStorage.getItem("organization_name")}
                onChange={e =>
                  localStorage.setItem("organization_name", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Mulai</Form.Label>
                </Col>
                <Col>
                  <Form.Label>Akhir</Form.Label>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control
                    inline="true"
                    as="select"
                    value={localStorage.getItem("organization_month_start")}
                    onChange={e =>
                      localStorage.setItem(
                        "organization_month_start",
                        e.target.value
                      )
                    }
                  >
                    <option>Bulan</option>
                    {this.getMonths()}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={localStorage.getItem("organization_year_start")}
                    inline="true"
                    onChange={e =>
                      localStorage.setItem(
                        "organization_year_start",
                        e.target.value
                      )
                    }
                  >
                    <option>Tahun</option>
                    {this.getYears()}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={localStorage.getItem("organization_month_end")}
                    inline="true"
                    onChange={e =>
                      localStorage.setItem(
                        "organization_month_end",
                        e.target.value
                      )
                    }
                  >
                    <option>Bulan</option>
                    {this.getMonths()}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    inline="true"
                    value={localStorage.getItem("organization_year_end")}
                    onChange={e =>
                      localStorage.setItem(
                        "organization_year_end",
                        e.target.value
                      )
                    }
                  >
                    <option>Tahun</option>
                    {this.getYears()}
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>
          </div>
        </ContentDiv>
      );
    };

    const EducationHistory = () => {
      return (
        <ContentDiv>
          <ul>
            <li>
              <div className="circle">4</div>
            </li>
            <li>Riwayat Pendidikan SMP</li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </li>
          </ul>
          <div className="content">
            <Form.Group>
              <Form.Label>Nama SMP</Form.Label>
              <Form.Control
                placeholder="Masukkan nama sekolah"
                value={localStorage.getItem("smp_name")}
                onChange={e => localStorage.setItem("smp_name", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Mulai</Form.Label>
                </Col>
                <Col>
                  <Form.Label>Akhir</Form.Label>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Control
                    as="select"
                    inline="true"
                    value={localStorage.getItem("smp_month_start")}
                    onChange={e =>
                      localStorage.setItem("smp_month_start", e.target.value)
                    }
                  >
                    <option>Bulan</option>
                    {this.getMonths()}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    inline="true"
                    value={localStorage.getItem("smp_year_start")}
                    onChange={e =>
                      localStorage.setItem("smp_year_start", e.target.value)
                    }
                  >
                    <option>Tahun</option>
                    {this.getYears()}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    inline="true"
                    value={localStorage.getItem("smp_month_end")}
                    onChange={e =>
                      localStorage.setItem("smp_month_end", e.target.value)
                    }
                  >
                    <option>Bulan</option>
                    {this.getMonths()}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    inline="true"
                    value={localStorage.getItem("smp_year_end")}
                    onChange={e =>
                      localStorage.setItem("smp_year_end", e.target.value)
                    }
                  >
                    <option>Tahun</option>
                    {this.getYears()}
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nilai Rata-rata UN</Form.Label>
              <Form.Control
                placeholder="Masukkan Nilai"
                value={localStorage.getItem("smp_score")}
                onChange={e =>
                  localStorage.setItem("smp_score", e.target.value)
                }
              />
            </Form.Group>
          </div>
        </ContentDiv>
      );
    };

    const Div = styled.div`
      text-align: center;
      padding-bottom: 32px;
      .progress {
        position: relative;
        margin-bottom: 64px;
        border-radius: 0px;
        padding: 16px;
        height: 60px;
        border-top: 10px solid ${darkBlue};
        background-color: ${lightestBlue};
        ul {
          display: block;
          margin-left: auto;
          margin-right: auto;
          li {
            list-style: none;
            display: inline-block;
            color: #eee;
            margin-right: 64px;
            font-size: 11pt;
            font-weight: bold;
            &.active {
              color: ${darkBlue};
            }
          }
        }
      }
      ul {
        li {
          list-style: none;
        }
      }
      .title {
        li {
          display: inline-block;
          margin-right: 16px;
          h3 {
            color: ${darkBlue};
            font-weight: 600;
          }
        }
      }
      .content {
        li {
          margin-bottom: 32px;
        }
      }
      button {
        font-size: 12pt;
        font-weight: bold;
        border-radius: 8px;
        width: 100%;
        max-width: 300px;
        text-align: center;
        background-color: ${darkBlue};
      }
    `;
    return (
      <Template>
        <div
          style={{
            backgroundImage: "url('" + background + "')",
            backgroundSize: "cover",
            height: "100vh",
            overflow: "scroll"
          }}
        >
          <Div>
            <div className="progress">
              <ul>
                <li className="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Riwayat Diri
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Aspirasi Pekerjaan
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Tes Karakter
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Selesai
                </li>
              </ul>
            </div>
            <ul className="title">
              <li>
                <img src={profile} alt="profile_logo" />
              </li>
              <li>
                <h3>Riwayat Diri</h3>
              </li>
            </ul>
            <ul className="content">
              <li>
                <Uploads />
              </li>
              <li>
                <Biography />
              </li>
              <li>
                <JobExperience />
              </li>
              <li>
                <EducationHistory />
              </li>
            </ul>
            <Link to="/jobaspiration">
              <Button>Selanjutnya</Button>
            </Link>
          </Div>
        </div>
      </Template>
    );
  }
}

export default connect(mapStateToProps)(MyHistory);
