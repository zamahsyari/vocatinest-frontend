import React from "react";
import Template from "../components/Template";
import { connect } from "react-redux";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";

class Register extends React.Component {
  getDays() {
    let days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days.map(item => {
      if (item < 10) {
        return <option value={"0" + item}>{"0" + item}</option>;
      } else {
        return <option value={item}>{item}</option>;
      }
    });
  }
  getMonths() {
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
    let monthIndexes = [];
    for (let i = 1; i <= 12; i++) {
      monthIndexes.push(i);
    }
    return months.map((item, i) => {
      if (i < 10) {
        return <option value={"0" + (i + 1)}>{item}</option>;
      } else {
        return <option value={i + 1}>{item}</option>;
      }
    });
  }
  getYears() {
    let years = [];
    let now = new Date();
    for (let i = 1900; i <= now.getFullYear() - 18; i++) {
      years.push(i);
    }
    return years.map(item => {
      return <option value={item}>{item}</option>;
    });
  }
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
                      {this.getDays()}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>Bulan</option>
                      {this.getMonths()}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control as="select">
                      <option>Tahun</option>
                      {this.getYears()}
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
