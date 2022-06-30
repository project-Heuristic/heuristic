import React from "react";
import "./style/about.scss";
// import { ReactComponent as Online } from "../assets/online.svg";
// import { ReactComponent as Video } from "../assets/video.svg";

// import { ReactComponent as Expert } from "../assets/expert.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div>
        <b>What we provides</b>
        <p>
          lorem ipsum dollar shit abrivation <br></br> hbhbsdbhjbnnnkjnjklnjknj
          df sdfsdf dsf kn jbjksakd dfdsfsd
        </p>
      </div>
      <div id="boxes">
        <div id="box">
          <img
            className="icon"
            alt="  training"
            src="/images/training.png"
          ></img>

          <strong>Online Guidance</strong>
          <span>
            lorem ipsum dollar shit abrivationlorem ipsum dollar shit abrivation
          </span>
        </div>
        <div id="box">
          <img
            className="icon"
            alt="video"
            src="/images/online-lesson.png"
          ></img>
          <strong>Video Suggestions</strong>
          <span>
            lorem ipsum dollar shit abrivationlorem ipsum dollar shit abrivation
          </span>
        </div>
        <div id="box">
          <img className="icon" alt="webinar" src="/images/webinar.png"></img>
          <strong>Expert Consultant</strong>
          <span>
            lorem ipsum dollar shit abrivationlorem ipsum dollar shit abrivation
          </span>
        </div>
      </div>
    </section>
  );
}
