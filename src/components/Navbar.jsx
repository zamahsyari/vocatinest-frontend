import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  renderHamburger() {
    const Ul = styled.ul`
      margin-left: -16px;
      margin-top: 20px;
      float: left;
      li {
        display: inline-block;
        margin-right: 16px;
        img.logo {
          margin-top: -8px;
          height: 24px;
        }
      }
    `;
    if (this.props.token !== "") {
      return (
        <Ul>
          <li>
            <FontAwesomeIcon
              style={{ fontSize: "18pt", marginTop: "-16px" }}
              icon={faBars}
            />
          </li>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>
        </Ul>
      );
    } else {
      return (
        <Ul>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>
        </Ul>
      );
    }
  }
  showShadowed() {
    if (this.props.token !== "") {
      return "0px 5px 5px #eeeeee";
    } else {
      return "none";
    }
  }
  renderIsLogin() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    if (this.props.token === "") {
      const Ul = styled.ul`
        float: right;
        li {
          padding-top: 4px;
          padding-bottom: 4px;
          padding-left: 24px;
          padding-right: 24px;
          border-radius: 8px;
          display: inline-block;
          margin: 8px;
          a {
            color: ${darkBlue};
            font-weight: 600;
            text-decoration: none;
          }
          &.active {
            background-color: ${darkBlue};
            a {
              text-decoration: none;
              color: white;
            }
          }
        }
      `;
      return (
        <Ul>
          <li>
            <Link to="/login">Masuk</Link>
          </li>
          <li className="active">
            <Link to="/register">Daftar</Link>
          </li>
        </Ul>
      );
    } else {
      const Ul = styled.ul`
        float: right;
        margin-top: 16px;
        li {
          color: ${mediumBlue};
          display: inline-block;
          margin-right: 16px;
          input {
            background-color: #eeeeee;
            width: 400px;
            font-size: 8pt;
            padding-left: 32px;
          }
        }
      `;
      return (
        <Ul>
          <li style={{ marginRight: -24, position: "relative", zIndex: 1 }}>
            <FontAwesomeIcon
              style={{ color: darkBlue, fontSize: "10pt" }}
              icon={faSearch}
            />
          </li>
          <li>
            <Form.Control
              type="text"
              placeholder="Cari Pekerjaan, Kata Kunci, atau Perusahaan"
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li>Hi</li>
        </Ul>
      );
    }
  }
  render() {
    return (
      <Container
        style={{
          boxShadow: this.showShadowed(),
          marginLeft: 0,
          width: "100%",
          height: 60,
          position: "relative",
          zIndex: 20
        }}
        fluid={true}
      >
        <div>
          {this.renderHamburger()}
          {this.renderIsLogin()}
        </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
