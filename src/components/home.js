import React from "react";
import { ReactComponent as Img } from "../assets/homepage-image.svg";
import './style/home.scss'
export default function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <span> Solve problems and make judgments quickly and efficiently</span>
        <button>Get Started</button>
      </div>
      <div className="image">
        <Img className="img"></Img>
      </div>
    </div>
  );
}
