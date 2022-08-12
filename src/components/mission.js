import React from "react";
import "./style/mission.scss";

import { ReactComponent as Side } from "../assets/mission.svg";

function mission() {
  return (
    <section className="about" id="mission">
    <div className="top">
      <p className="top_head">Mission </p>
      <div className="top_mid">
      Help Students Virtualy to overcome from their situations
      </div>
      <p className="top_end">10% Instant Discount up to INR 1250 on SBI Credit Card Non-EMI Transactions. Minimum purchase of INR 5000 </p>
      <button>Learn More</button>

    </div>
    <div className="side_img">
      <Side className="img"></Side>
    </div>
      
  </section>
  );
}

export default mission;
