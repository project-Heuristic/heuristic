import "./style/login.page.scss";
import React, { useState } from "react";
import { ReactComponent as Img } from "../assets/credential.svg";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

import Alert from "@mui/material/Alert";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
    
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  const googleSignInStart = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/students");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section>
      {error ?   <Alert severity="error" className="alert">
            {error}
          </Alert>   : ""}
      <form className="credentials" onSubmit={submit}>
      <i class="ri-arrow-left-line back0 " onClick={()=>navigate('/')}></i>

        <b>Welcome back</b>
        <p>welcome back please eneter your details</p>

        <div className="inputFields">
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="inputFields">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
          {/* <div className="inputFields">
            <label>Login as</label>
            <select
              name="userType"
              id="userType"
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div> */}
        <p className="fpassword" onClick={() => navigate("/forgotPassword")}>
          Forgot Password?
        </p>
        <button className="login" onClick={submit}>
          Log In
        </button>
        <div className="google_login" onClick={googleSignInStart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          <p>Continue with google</p>
        </div>
        <p style={{ marginTop: "10px" }} onClick={() => navigate("/Signup")}>
          Don't Have an Account ? <strong>Signup</strong>
        </p>
      </form>
      
      <Img className="image"></Img>
    </section>
  );
}

export default Login;
