import React from "react";
import "./style/about.scss";
// import { ReactComponent as Online } from "../assets/online.svg";
// import { ReactComponent as Video } from "../assets/video.svg";
import { ReactComponent as Img1 } from "../assets/box1.svg";
import { ReactComponent as Img2 } from "../assets/box2.svg";
import { ReactComponent as Img3 } from "../assets/box3.svg";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// import { ReactComponent as Expert } from "../assets/expert.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="top">
      <Fade left opposite> 
        <p className="top_head">About us </p>
      </Fade >
  
        <div className="top_mid">
   Providing Online Platform to students To overcome from there Mental Helth
 
        </div>
        <Fade left opposite> 
        <p className="top_end">
        The aim is 
        to solve the problems of students , <br></br>  develop assertiveness and negotiation to deal with life’s challenges  facing by the them
        </p>
        </Fade> 
      </div>
        <div className="boxes">
          
<div className="box">
<Fade >
  <Img1 className="box_image"></Img1>
  </Fade>
 
    

  <p> <Zoom  >Online support  </Zoom> <br></br>
  <b>start value has mixed support, consider using flex-start instead</b></p>
</div>
<div className="box">
  
  <Fade >

  <Img2 className="box_image"></Img2>
  </Fade>
  <p> <Zoom  >video suggestions</Zoom>
  <b>start value has mixed support, consider using flex-start instead</b></p>
</div>
<div className="box">
  <Fade >

  <Img3 className="box_image"></Img3>
  </Fade>
  <p><Zoom  >Expert Consultant</Zoom>
  <b>start value has mixed support, consider using flex-start instead</b></p>
</div>
      </div>
    </section>
  );
}
