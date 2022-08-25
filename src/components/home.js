import React, { useEffect } from "react";
import { ReactComponent as Img } from "../assets/homepage-image.svg";
import "./style/home.scss";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';
export default function Home() {


  return (
    <div className="home" id="home">
      <div className="home-content">
        <span mountOnEnter>
          {" "}
          <Fade left>   
          DON'T<b>WORRY</b>HEURISTIC TAKE CARE
          </Fade >
        </span>
        <p> Help students overcome from their Mental situations</p>
        <h2>
        <Flip left>
      
          <strong>Expert Mentors</strong>
     
          <strong>Specialized content</strong>
          <strong>Quality videos</strong>
          </Flip>
        </h2>
        <Fade>
        
        <button>Get Started</button>
        </Fade>
 
        
      </div>
      <div className="image">
      <Zoom>

        <Img className="img"></Img>
      </Zoom>
      </div>
    </div>
  );
}
