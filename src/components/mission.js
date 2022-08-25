import React from "react";
import "./style/mission.scss";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { ReactComponent as Side } from "../assets/mission.svg";

function mission() {
  return (
    <section className="about" id="mission">
    <div className="top">
    <Fade >

      <p className="top_head">Mission </p>
    </Fade>
      <div className="top_mid">
      Help Students Virtually to overcome from their situations
      </div>
      <p className="top_end">
      <Fade >

      To reach every student of india To boost confidence and communicate effectively.
      </Fade>
      
      </p>
      <button> <a href="#"> Learn More</a></button>
    </div>
    <div className="side_img">
    <Zoom >
      <Side className="img"></Side>
    </Zoom >
    </div>
      
  </section>
  );
}

export default mission;
