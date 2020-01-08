import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import background from "../assets/background.jpg";
import joblogo from "../assets/job_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

class JobAspiration extends React.Component {
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

    const JobCategory = () => {
      return (
        <ContentDiv>
          <ul>
            <li>
              <div className="circle">1</div>
            </li>
            <li>Bidang Pekerjaan dan Profesi</li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </li>
          </ul>
          <div className="content">
            <Form.Group>
              <Form.Label>Bidang Pekerjaan yang diinginkan</Form.Label>
              <Form.Control as="select" inline>
                <option>Pilih bidang pekerjaan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Profesi yang diinginkan</Form.Label>
              <Form.Control as="select" inline>
                <option>Pilih profesi</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Jenis Pekerjaan yang diinginkan</Form.Label>
              <Form.Control as="select" inline>
                <option>Pilih jenis pekerjaan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Hal yang paling penting dalam berkarir</Form.Label>
              <Form.Control as="select" inline>
                <option>Pilih alasan</option>
              </Form.Control>
            </Form.Group>
          </div>
        </ContentDiv>
      );
    };

    const JobDetail = () => {
      return (
        <ContentDiv>
          <ul>
            <li>
              <div className="circle">2</div>
            </li>
            <li>Detail Pekerjaan</li>
            <li>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </li>
          </ul>
          <div className="content">
            <Form.Group>
              <Form.Label>Pilih Perusahaan yang diinginkan</Form.Label>
              <Form.Control as="select" inline>
                <option>Pilih perusahaan</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Apakah bersedia di luar kota?</Form.Label>
              <Form.Row>
                <Form.Check inline type="radio" label="Ya" />
                <Form.Check inline type="radio" label="Tidak" />
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tuliskan ekspektasi gaji</Form.Label>
              <Form.Control />
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
                <li class="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Aspirasi Pekerjaan
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Selesai
                </li>
              </ul>
            </div>
            <ul className="title">
              <li>
                <img src={joblogo} alt="job_logo" />
              </li>
              <li>
                <h3>Aspirasi Pekerjaan</h3>
              </li>
            </ul>
            <ul className="content">
              <li>
                <JobCategory />
              </li>
              <li>
                <JobDetail />
              </li>
            </ul>
            <Link to="/done">
              <Button>Selanjutnya</Button>
            </Link>
          </Div>
        </div>
      </Template>
    );
  }
}

export default JobAspiration;
