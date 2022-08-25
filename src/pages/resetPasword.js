import "./style/login.page.scss";
import React from "react";
import { ReactComponent as Img } from "../assets/credential.svg";
import {useNavigate} from 'react-router-dom'
function ResetPassword() {
    const navigate=useNavigate();
  return (
    <section>
      <div className="credentials">
      <i class="ri-arrow-left-line back0 " onClick={()=>navigate('/')}></i>
        <b>Reset Password </b>
        <p>Enter your new Password</p>
        <div className="inputFields">
          <label>New Password</label>
          <input type="password"></input>
        </div>
        <div className="inputFields">
          <label>Confirm Password</label>
          <input type="password"></input>
        </div>
       
       
        <button className="login">Reset</button>
       
      </div>
      <Img className="image"></Img>
    </section>
  );
}

export default ResetPassword;
