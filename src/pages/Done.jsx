import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import background from "../assets/background.jpg";
import doneLogo from "../assets/done_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

class Done extends React.Component {
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
      img {
        height: 256px;
      }
      h4 {
        font-size: 20pt;
        color: ${mediumBlue};
        margin-top: 16px;
        margin-bottom: 16px;
        font-weight: bold;
      }
      p {
        margin-left: auto;
        margin-right: auto;
        color: ${darkBlue};
        max-width: 300px;
      }
      button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 8px;
        padding-bottom: 8px;
        margin-bottom: 32px;
      }
      i {
        font-style: normal;
        font-size: 9pt;
      }
      ul {
        margin-top: 16px;
        margin-left: -40px;
        li {
          display: inline-block;
          margin-right: 64px;
          font-size: 9pt;
          font-weight: bold;
          color: ${darkBlue};
          &:last-child {
            margin-right: 0px;
          }
        }
      }
    `;

    const ItsDone = () => {
      return (
        <ContentDiv>
          <div className="content">
            <img src={doneLogo} alt="job_logo" />
            <h4>Selesai</h4>
            <p>Pengisian data kamu telah selesai, cek profil kamu sekarang</p>
            <Link to="/profile">
              <Button>Lihat Profil Saya</Button>
            </Link>
            <i>Ingin edit ulang data kamu?</i>
            <ul>
              <li>
                <a href="#">Edit Riwayat Diri</a>
              </li>
              <li>
                <a href="#">Edit Aspirasi Pekerjaan</a>
              </li>
            </ul>
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
                <li className="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Tes Karakter
                </li>
                <li class="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Selesai
                </li>
              </ul>
            </div>
            <ul className="content">
              <li>
                <ItsDone />
              </li>
            </ul>
          </Div>
        </div>
      </Template>
    );
  }
}

export default Done;
