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
    schools: state.schools.data
  };
};

class MyHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_school: null,
      specializations: []
    };
    this.selectSchool = this.selectSchool.bind(this);
  }
  async selectSchool(e) {
    return false;
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
              <Form.Control type="file" />
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
        return <option value={item}>{item}</option>;
      });
    };

    const renderSchools = data => {
      return data.map(item => {
        return <option value={item.id}>{item.title}</option>;
      });
    };

    const renderSpecialization = data => {
      return data.map(item => {
        return <option value={item}>{item}</option>;
      });
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
              <Form.Check inline type="radio" label="Laki-Laki" />
              <Form.Check inline type="radio" label="Perempuan" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pilih Nama SMK</Form.Label>
              <Form.Control as="select" onChange={this.selectSchool}>
                <option>Pilih nama SMK</option>
                {renderSchools(this.props.schools)}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Kejuruan</Form.Label>
              {/* <Form.Control as="select">
                <option>Pilih kejuruan</option>
              </Form.Control> */}
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Kelas</Form.Label>
              <br />
              <Form.Check inline type="radio" label="10" />
              <Form.Check inline type="radio" label="11" />
              <Form.Check inline type="radio" label="12" />
              <Form.Check inline type="radio" label="Sudah lulus" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tahun Lulus/Target Lulus</Form.Label>
              <Form.Control as="select">
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
              <Form.Control placeholder="Masukkan peran" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nama Organisasi</Form.Label>
              <Form.Control placeholder="Masukkan nama organisasi" />
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
                  <Form.Control as="select" inline>
                    <option>Bulan</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" inline>
                    <option>Tahun</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" inline>
                    <option>Bulan</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" inline>
                    <option>Tahun</option>
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
              <Form.Control placeholder="Masukkan nama sekolah" />
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
                  <Form.Control as="select" inline>
                    <option>Bulan</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" inline>
                    <option>Tahun</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" inline>
                    <option>Bulan</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control as="select" inline>
                    <option>Tahun</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nilai Rata-rata UN</Form.Label>
              <Form.Control placeholder="Masukkan Nilai" />
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
                <li class="active">
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
