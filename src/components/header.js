import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

import {useNavigate} from 'react-router-dom';

import "./style/header.scss";
const Header = () => {
  const naviagate=useNavigate();
  return (
    <div className="Navigation">
      <div className="Logo_container">
        <Logo className="logo"></Logo>
        <span>EURISTIC</span>
      </div>
      <div className="sections">
        <div>
          <span onClick={() => window.location.replace("/#home")}>Home</span>
        </div>
        <div  onClick={() => window.location.replace("/#about")}>
          <span>About</span>
        </div>
        <div onClick={() => window.location.replace("/#mission")}>
          <span>Mission</span>
        </div>
        <div onClick={() => window.location.replace("/#testimonials")}>
          <span>Testimonials</span>
        </div>
      </div>

      <button className="log_in" onClick={()=>naviagate('/login')}>Login</button>
    </div>
  );
};

export default Header;
