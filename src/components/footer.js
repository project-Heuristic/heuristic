import React from "react";
import "./style/footer.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Facebook } from "../assets/faacebook.svg";
import { ReactComponent as Insta } from "../assets/insta.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="card">
        <span>Change your life with Heuristic</span>
        <button>Read More</button>
      </div>

      <div className="footer_content">
        <div className="first_section">
          <div className="Logo_footer">
            <Logo className="logo"></Logo>
            <span>EURISTIC</span>
          </div>
          <p>One stop sollution for your problems</p>
        </div>
        <div className="sectionS">
          <b>Services</b>
          <span>about</span>
          <span>how it works?</span>
          <span>benifits</span>
          <span>review</span>
        </div>

        <div className="sectionS">
          <b>About</b>
          <span>about us</span>
          <span>term</span>
          <span>Privacy Policy</span>
          <span>carrers</span>
         
        </div>

        <div className="media_container">
          <span>Social Media</span>
          <div className="social_media">
            <Facebook className="social"></Facebook>
            <Insta className="social"></Insta>
            <Twitter className="social"></Twitter>
            <Youtube className="social"></Youtube>
          </div>
        </div>
      </div>
     
    </div>
    <div className="copyright">
   copyright ©	2022 Heuristic
      </div>
  </>
  );
}

export default Footer;
