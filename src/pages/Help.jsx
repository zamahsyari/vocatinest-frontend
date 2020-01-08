import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";

class Help extends React.Component {
  render() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    const lightBlue = "#67a4e5";
    const lightestBlue = "#bbdcff";
    const Div = styled.div`
      padding: 16px;
      h3 {
        color: ${darkBlue};
        margin-bottom: 32px;
      }
      .row {
        margin-bottom: 16px;
      }
    `;
    return (
      <Template>
        <Div>
          <h3>Bantuan</h3>
          <Row>
            <Col md={2}>No.Telp</Col>
            <Col md={8}>
              <Form.Control />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Email</Col>
            <Col md={8}>
              <Form.Control />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Konfirmasi Email</Col>
            <Col md={8}>
              <Form.Control />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Topik</Col>
            <Col md={8}>
              <Form.Control />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Sub Topik</Col>
            <Col md={8}>
              <Form.Control />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Pesan</Col>
            <Col md={8}>
              <Form.Control as="textarea" />
            </Col>
          </Row>
          <Row>
            <Col md={2}>Lampiran</Col>
            <Col md={8}>
              <Form.Control as="textarea" />
            </Col>
          </Row>
        </Div>
      </Template>
    );
  }
}

export default Help;
