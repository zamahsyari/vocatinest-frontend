import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./HomeForm.scss";

class HomeForm extends Component {
  getPopular() {
    const populars = [
      "Agrikultur",
      "Teknik",
      "Edukasi",
      "Pariwisata",
      "Finansial",
      "Teknologi"
    ];
    return populars.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
  }
  render() {
    return (
      <div className="home-form">
        <Container>
          <Row>
            <Col>
              <h3>Cari Lowongan Kerja</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Row>
                  <Form.Group>
                    <Form.Control placeholder="Nama/Sektor Pekerjaan" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control placeholder="Lokasi" />
                  </Form.Group>
                  <Button>Cari</Button>
                </Form.Row>
              </Form>
              <ul>
                <li>Paling Populer :</li>
                <li>
                  <ul>{this.getPopular()}</ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeForm;
