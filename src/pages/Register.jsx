import React from "react";
import Template from "../components/Template";
import { connect } from "react-redux";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <Template>
        <Container fluid={true} className="login">
          <div className="login-form">
            <h3>Daftar</h3>
            <Form>
              <Form.Group>
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control as="select">
                      <option>Tanggal</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>Bulan</option>
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>Tahun</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ketik Ulang Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group>
                <ul>
                  <li>
                    <Form.Check type="checkbox" />
                  </li>
                  <li style={{ fontSize: "8pt" }}>
                    Saya Menyetujui Syarat dan Ketentuan & Kebijakan Privasi
                  </li>
                </ul>
              </Form.Group>
              <Form.Group>
                <ul>
                  <li>
                    <Form.Check type="checkbox" />
                  </li>
                  <li style={{ fontSize: "8pt" }}>
                    Saya Menyetujui Jika Akan Dihubungi oleh Perusahaan/Instansi
                    Terkait
                  </li>
                </ul>
              </Form.Group>
              <Button>Daftar</Button>
            </Form>
          </div>
        </Container>
      </Template>
    );
  }
}

export default connect()(Register);
