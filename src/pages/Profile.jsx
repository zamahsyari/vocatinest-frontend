import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import background from "../assets/background.jpg";
import joblogo from "../assets/job_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchProfile } from "../redux/middleware";

const mapStateToProps = state => {
  return {
    profile: state.profile.data,
    jobs: state.professions.selected,
    jobcats: state.jobCategories.selected
  };
};

class Profile extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProfile(this.state));
  }
  render() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    const lightBlue = "#67a4e5";
    const Div = styled.div`
      height: 100vh;
      overflow: scroll;
      .row {
        .col-md-3.bluish {
          height: 100vh;
          overflow: scroll;
          background-color: ${mediumBlue};
          padding: 32px;
          color: white;
          .img-frame {
            width: 180px;
            height: 180px;
            border-radius: 128px;
            overflow: hidden;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 48px;
            img {
              height: 100%;
            }
          }
          h4 {
            margin-top: 32px;
            font-size: 11pt;
            font-weight: bold;
          }
          p {
            font-size: 10pt;
          }
          ul {
            margin-left: -40px;
            li {
              list-style: none;
              font-size: 10pt;
            }
          }
        }
        .col-md-7 {
          height: 100vh;
          overflow: scroll;
          padding: 16px;
          h2 {
            color: ${darkBlue};
            font-weight: bold;
          }
          p {
            font-size: 11pt;
          }
          h4 {
            font-size: 12pt;
            font-weight: bold;
            color: ${darkBlue};
          }
          .job-tags {
            margin-left: -40px;
            li {
              list-style: none;
              display: inline-block;
              margin-right: 16px;
              padding-left: 16px;
              padding-right: 16px;
              padding-top: 4px;
              padding-bottom: 4px;
              border: 1px solid ${darkBlue};
              border-radius: 16px;
              font-size: 11pt;
              color: ${darkBlue};
            }
          }
          .job-vacancies {
            margin-left: -40px;
            li {
              width: 45%;
              list-style: none;
              display: inline-block;
              box-shadow: 0px 0px 5px #777;
              margin: 16px;
              padding: 16px;
              border-radius: 8px;
              .col-md-3 {
                img {
                  width: 100%;
                }
              }
              .col-md-9 {
                h4 {
                  font-size: 12pt;
                  margin: 0px;
                }
                b {
                  font-size: 10pt;
                  color: ${mediumBlue};
                }
                button {
                  display: block;
                  font-size: 10pt;
                  font-weight: bold;
                  padding-top: 4px;
                  padding-bottom: 4px;
                  padding-left: 16px;
                  padding-right: 16px;
                  margin-top: 16px;
                  background-color: ${darkBlue};
                }
              }
            }
          }
          .job-trends {
            margin-left: -40px;
            li {
              box-shadow: 0px 0px 5px #777;
              margin: 16px;
              padding: 16px;
              border-radius: 8px;
              list-style: none;
              .col-md-2 {
                img {
                  width: 100%;
                }
              }
              .col-md-10 {
                i {
                  font-size: 11pt;
                  color: #777;
                  font-style: normal;
                }
                h4 {
                  font-size: 12pt;
                }
                p {
                  font-size: 10pt;
                }
              }
            }
          }
        }
      }
    `;

    const RenderList = props => {
      return props.data.map(item => {
        return <li>{item}</li>;
      });
    };

    const RenderDivList = props => {
      return props.data.map(item => {
        return (
          <li>
            <div>
              <Row>
                <Col md={3}>
                  <img src={item.image} alt="company" />
                </Col>
                <Col md={9}>
                  <h4>{item.title}</h4>
                  <b>{item.company}</b>
                  <Button>Apply</Button>
                </Col>
              </Row>
            </div>
          </li>
        );
      });
    };

    const RenderTrendList = props => {
      return props.data.map(item => {
        return (
          <li>
            <div>
              <Row>
                <Col md={2}>
                  <img src={item.image} alt="company" />
                </Col>
                <Col md={10}>
                  {/* <i>{item.website}</i> */}
                  <h4>{item.title}</h4>
                  <b>{item.company}</b>
                  <p>{item.excerpt}</p>
                </Col>
              </Row>
            </div>
          </li>
        );
      });
    };

    const getJobString = () => {
      return this.props.jobs.map(item => {
        return item.title;
      });
    };

    const JobCatString = () => {
      let jobcats = this.props.jobcats.map(item => {
        return item.title;
      });
      return jobcats.join(" dan ");
    };

    const shuffle = array => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    const renderPersona = () => {
      let chars = [
        "Komunikatif",
        "Percaya Diri",
        "Kreatif",
        "Konsisten",
        "Tepat Waktu"
      ];
      let shuffled = shuffle(chars);
      let result = [shuffled[0], shuffled[1]];
      return result.join(" dan ");
    };

    return (
      <Template>
        <Div>
          <Row>
            <Col md={3} className="bluish">
              <div className="img-frame">
                <img src={localStorage.getItem("image")} alt="profile_pic" />
              </div>
              <h4>Riwayat Pendidikan</h4>
              <ul>
                <RenderList
                  data={[
                    localStorage.getItem("school"),
                    localStorage.getItem("smp_name")
                  ]}
                />
              </ul>
              <h4>Lokasi</h4>
              <p>{this.props.profile.location}</p>
              <h4>Pengalaman Organisasi</h4>
              <ul>
                <RenderList
                  data={[
                    localStorage.getItem("organization_role") +
                      " " +
                      localStorage.getItem("organization_name")
                  ]}
                />
              </ul>
              {/* <h4>Penghargaan dan Pencapaian</h4>
              <ul>
                <RenderList data={this.props.profile.achievements} />
              </ul> */}
            </Col>
            <Col md={7}>
              <h2>Profil Saya</h2>
              <p>
                Saya adalah seorang siswa di {localStorage.getItem("school")}{" "}
                jurusan {localStorage.getItem("school_specialization")}. Saya
                akan menyelesaikan pendidikan kejuruan pada tahun{" "}
                {localStorage.getItem("graduate_year")}. Saya adalah seorang
                yang {renderPersona()}. Minat yang saya miliki adalah pada
                bidang {JobCatString()}. Saya juga aktif berorganisasi, saya
                tergabung dalam organisasi{" "}
                {localStorage.getItem("organization_name")}.
              </p>
              <br />
              <h4>Pekerjaan Terkait</h4>
              <ul className="job-tags">
                <RenderList data={getJobString()} />
              </ul>
              <br />
              {/* <h4>Lowongan Pekerjaan</h4>
              <ul className="job-vacancies">
                <RenderDivList data={this.props.profile.job_vacancies} />
              </ul>
              <h4>Trend Pekerjaan</h4>
              <ul className="job-trends">
                <RenderTrendList data={this.props.profile.job_trends} />
              </ul> */}
            </Col>
          </Row>
        </Div>
      </Template>
    );
  }
}

export default connect(mapStateToProps)(Profile);
