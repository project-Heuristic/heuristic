import React from "react";
import "./style/about.scss";
// import { ReactComponent as Online } from "../assets/online.svg";
// import { ReactComponent as Video } from "../assets/video.svg";
import { ReactComponent as Img1 } from "../assets/box1.svg";
import { ReactComponent as Img2 } from "../assets/box2.svg";
import { ReactComponent as Img3 } from "../assets/box3.svg";

// import { ReactComponent as Expert } from "../assets/expert.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="top">
        <p className="top_head">About us </p>
        <div className="top_mid">
          lorem ipsum dollar scontainer to reduce packaging. If this is a gift, consider shipping to a different address.hit abrivation  jbjksakd
          dfdsfsd
        </div>
        <p className="top_end">10% Instant Discount up to INR 1250 on SBI Credit Card Non-EMI Transactions. Minimum purchase of INR 5000 </p>
      </div>
        <div className="boxes">
<div className="box">
  <Img1 className="box_image"></Img1>
  <p>Online support <br></br>
  <b>start value has mixed support, consider using flex-start instead</b></p>
</div>
<div className="box">
  <Img2 className="box_image"></Img2>
  <p>video suggestions
  <b>start value has mixed support, consider using flex-start instead</b></p>
</div>
<div className="box">
  <Img3 className="box_image"></Img3>
  <p>Expert Consultant
  <b>start value has mixed support, consider using flex-start instead</b></p>
</div>
      </div>
    </section>
  );
}
