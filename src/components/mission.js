import React from "react";
import "./style/mission.scss";

import { ReactComponent as Mission } from "../assets/mission.svg";

function mission() {
  return (
    <div className="mission" id="mission">
      <div className="MissionImg">
        <Mission className="img"></Mission>
      </div>
      <div className="missionContent">
        <b>Help Students Virtualy to overcome from their <br></br>situations</b>
        <p>
          Lorem sit abbhbh hbjasd bhjkhd mlklasd jkjn jklje djkljhjsd hhasdn
          jklhjds njhkdsa hjkahds njhsjkdbakjs njasjkdnajkndk njkhasjkd
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default mission;
