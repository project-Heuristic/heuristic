import React, { useEffect } from "react";
import { ReactComponent as Img } from "../assets/homepage-image.svg";
import "./style/home.scss";
export default function Home() {


  return (
    <div className="home" id="home">
      <div className="home-content">
        <span>
          {" "}
          DON'T <b>WORRY</b> HEURISTIC TAKE CARE
        </span>
        <p> help students overcome fro there situations</p>
        <h2>
          <strong>Expert Mentors</strong>
          <strong>Specialized content</strong>
          <strong>Quality videos</strong>
        </h2>
        <button>Get Started</button>
      </div>
      <div className="image">
        <Img className="img"></Img>
      </div>
    </div>
  );
}
