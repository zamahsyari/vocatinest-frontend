import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form } from "react-bootstrap";
import background from "../assets/background.jpg";
import profile from "../assets/profile_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp, faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"

class Profile extends React.Component {
  render() {
    const darkBlue = '#195b9f';
    const mediumBlue = '#0099e2';
    const lightBlue = '#67a4e5';
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
          form{
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
      `

    const Uploads = () => {
      return <ContentDiv>
        <ul>
          <li><div className='circle'>1</div></li>
          <li>Unduh Foto & CV</li>
          <li><FontAwesomeIcon icon={faChevronCircleDown}/></li>
        </ul>
        <div className='content'>
          <Form>
            <Form.Label>Unggah CV</Form.Label>
            <Form.Control type="file"/>
            <Form.Label className="secondary-label">* format .doc, .pdf, .jpg, .png max 10 MB</Form.Label>
          </Form>
          <hr/>
          <Form>
            <Form.Label>Unggah Foto Diri</Form.Label>
            <Form.Control type="file"/>
            <Form.Label className="secondary-label">* format .jpg, .png max 10 MB</Form.Label>
          </Form>
        </div>
      </ContentDiv>
    }

    const Biography = () => {
      return <ContentDiv>
        <ul>
          <li><div className='circle'>2</div></li>
          <li>Biografi Professional</li>
          <li><FontAwesomeIcon icon={faChevronCircleDown}/></li>
        </ul>
        <div className='content'>
          <Form>
            <Form.Check inline type="radio" label='Laki-Laki' />
            <Form.Check inline type="radio" label='Perempuan' />
          </Form>
          <hr/>
          <Form>
            <Form.Label>Unggah Foto Diri</Form.Label>
            <Form.Control type="file"/>
            <Form.Label className="secondary-label">* format .jpg, .png max 10 MB</Form.Label>
          </Form>
        </div>
      </ContentDiv>
    }
    const Div = styled.div`
    text-align: center;
     ul{
       li{
         list-style:none;
       }
     }
     .title{
       li{
         display: inline-block;
         margin-right: 16px;
         h3{
           color: ${darkBlue};
           font-weight: 600;
         }
       }
     }
     .content{
       li{
         margin-bottom: 32px;
       }
     }
    `
    return (
      <Template>
        <Div
          style={{
            backgroundImage: "url('" + background + "')",
            backgroundSize: "cover",
            padding: 16,
            height: "100vh"
          }}
        >
          <ul className="title">
            <li>
              <img src={profile} />
            </li>
            <li>
              <h3>Riwayat Diri</h3>
            </li>
          </ul>
          <ul className="content">
            <li>
              <Uploads/>
            </li>
            <li>
              <Biography/>
            </li>
          </ul>
        </Div>
      </Template>
    );
  }
}

export default Profile;
