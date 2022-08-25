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
    

      <div className="footer_content">
        <div className="first_section">
          <div className="Logo_footer">
            HEURISTIC
          </div>
          <p>One stop solution for your problems</p>
        </div>
       
        <div className="media_container">
        
          <div className="social_media">
          <i class="ri-facebook-circle-line"></i>           
          <i class="ri-instagram-line"></i>
          <i class="ri-twitter-fill"></i>
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
