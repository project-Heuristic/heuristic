import "./style/login.page.scss";
import React from "react";
import { ReactComponent as Img } from "../assets/credential.svg";
import {useNavigate} from 'react-router-dom'
function ForgotPassword() {
    const naviagate=useNavigate();
  return (
    <section>
      <div className="credentials">
      <i class="ri-arrow-left-line back0 " onClick={()=>naviagate('/')}></i>

        <b>Forgot Password ?</b>
        <p>Enter your email</p>
        <div className="inputFields">
          <label>Email</label>
          <input type="text"></input>
        </div>
       
       
        <button className="login "  onClick={()=>naviagate('/resetPassword')}>Reset Password</button>
       
      </div>
      <Img className="image"></Img>
    </section>
  );
}

export default ForgotPassword;
