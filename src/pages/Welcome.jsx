import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import step1 from "../assets/step-1.svg";
import step2 from "../assets/step-2.svg";
import step3 from "../assets/step-3.svg";
import step4 from "../assets/step-4.svg";

class Welcome extends React.Component {
  getHowTos() {
    const howtos = [step1, step2, step3, step4];
    return howtos.map((item, i) => {
      return (
        <li key={i}>
          <img src={item} alt="step" />
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>
          Selamat Datang di <b>VOCATINEST</b>
        </h1>
        <p>
          Untuk menganalisis potensi dan mendapatkan pekerjaan yang sesuai untuk
          kamu, kamu akan melewati beberapa langkah berikut ini:
        </p>
        <ul>{this.getHowTos()}</ul>
        <Button>Selanjutnya</Button>
      </div>
    );
  }
}

export default Welcome;
