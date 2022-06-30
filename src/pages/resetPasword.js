import "./style/login.page.scss";
import React from "react";
import { ReactComponent as Img } from "../assets/credential.svg";
import {useNavigate} from 'react-router-dom'
function ResetPassword() {
    const naviagate=useNavigate();
  return (
    <section>
      <div className="credentials">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
            onClick={() => naviagate("/home")}
          />
        </svg>
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
