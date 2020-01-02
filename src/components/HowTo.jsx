import React, { Component } from "react";
import step1 from "../assets/step-1.svg";
import step2 from "../assets/step-2.svg";
import step3 from "../assets/step-3.svg";
import step4 from "../assets/step-4.svg";
import "./HowTo.scss";

class HowTo extends Component {
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
      <div className="howto">
        <h3>
          Bagaimana Cara <b>VOCATINEST</b> Bekerja ?
        </h3>
        <ul>{this.getHowTos()}</ul>
      </div>
    );
  }
}

export default HowTo;
