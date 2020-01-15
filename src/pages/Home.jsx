import React from "react";
import "./Home.scss";
import Template from "../components/Template";
import HomeForm from "../components/HomeForm";
import HowTo from "../components/HowTo";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Template>
        <Container className="home">
          <Row>
            <Col className="home-desc" md={6}>
              <h4>Pekerjaan Vokasi</h4>
              <h5>Dalam Satu Portal</h5>
              <p>
                Temukan Beragam Pilihan Pekerjaan Vokasi <br />
                Sesuai dengan Bakat dan Minatmu
              </p>
              <Link to="/register" className="home-button">
                Daftar Sekarang
              </Link>
            </Col>
            <Col md={6}></Col>
          </Row>
          <Row>
            <Col>
              <HomeForm />
            </Col>
          </Row>
          <Row>
            <Col>
              <HowTo />
            </Col>
          </Row>
        </Container>
      </Template>
    );
  }
}

export default Home;
