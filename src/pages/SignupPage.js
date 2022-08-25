import "./style/login.page.scss";
import React, { useState } from "react";
import { ReactComponent as Img } from "../assets/credential.svg";
import { useNavigate } from "react-router-dom";
import FileBAse from "react-file-base64";
import { useUserAuth } from "../context/userAuthContext";
import { useForm } from "react-hook-form";
import { createUserProfileDocument } from "../firebase/firebase-utils";
import { signOut } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [aadharImg, setAadharImg] = useState("");
  const [idImg, setIdImg] = useState("");
  const [formStep, setFormstep] = useState(0);
  const [profileImg,setProfileImg]=useState("");
  const { signUp, googleSignIn, userData } = useUserAuth();
  
  // console.log(user);
  const [userType, setUserType] = useState("");
  function nextStep() {
    
    setFormstep((cur) => cur + 1);
    console.log('👍👍👍'+userType);
  }
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({ mode: "all" });

  const submitForm = async (value) => {
    let userImages = { ...value, aadharImg, idImg,profileImg };
// console.log(value);
    const { Email, Password, userType } = value;
    // const data = JSON.stringify(value, null, 2);

    if (userType === "teacher") {
      setError("");
      try {
        console.log("hiii");
        const data = await signUp(Email, Password, userImages);
        console.log("data", data);
        localStorage.setItem("UserData", JSON.stringify(data));
        console.log(Email, Password);
        navigate("/teacher/dashboard", { state: data });
      } catch (err) {
        setError(err.message);
      }
    }
    if (userType === "student") {
      setError("");
      try {
        console.log("hiii");
        const newStudent=true;
        userImages ={...userImages,newStudent}
        const data = await signUp(Email, Password, userImages);
        console.log("data", data);
        localStorage.setItem("UserData", JSON.stringify(data));
        console.log(Email, Password);
        navigate("/students/dashboard", { state: data });
      //  await signOut();
        // navigate("/teacher/dashboard", { state: data });
      } catch (err) {
        setError(err.message);
      }
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
  function renderButtons() {
    if (formStep === 0) {
      return (
        <div className="buttons">
          <button
            disabled={!isValid}
            className="login"
            onClick={() => nextStep()}
          >
            Next <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      );
    } else if (formStep === 3) {
      return (
        <button
          disabled={!isValid}
          className="login"
          onClick={() => nextStep()}
        >
          Submit
        </button>
      );
    } else {
      return (
        <div className="buttons">
          <button
            disabled={!isValid}
            className="login"
            onClick={() => nextStep()}
          >
            <i class="ri-arrow-left-line"></i> Prev
          </button>
          <button
            disabled={!isValid}
            className="login"
            onClick={() => nextStep()}
          >
            Next <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      );
    }
  }
  function prevstep() {
    setFormstep((cur) => cur - 1);
  }

  let maxStep = 4;
  return (
    <section>
      <form className="credentials" onSubmit={handleSubmit(submitForm)}>
        {formStep < 4 ? (
          <>
            <i class="ri-arrow-left-line back0" onClick={()=>navigate('/')}></i>
            <b>Sign Up</b>
            <p>Please enter your details correct details</p>
            <span className="steps">
              <p> Step</p>
              {formStep + 1} of {maxStep}
            </span>
          </>
        ) : (
          ""
        )}

        {formStep === 0 ? (
          <>
            <div className="inputFields">
              <label>Email</label>
              <input
                type="text"
                name="Email"
                id="Email"
                {...register("Email", {
                  required: true,

                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.Email?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  Invalid email address
                </span>
              )}
            </div>
            <div className="inputFields">
              <label>Password</label>
              <input
                type="password"
                name="Password"
                id="Password"
                onChange={(e) => setPassword(e.target.value)}
                {...register("Password", {
                  required: "Password is required",

                  minLength: {
                    value: 8,
                    message: "must be 8 chars",
                  },
                })}
              ></input>
              {errors.Password?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {errors.Password?.message}
                </span>
              )}
            </div>
            <div className="inputFields">
              <label>Confirm Password</label>
              <input
                type="password"
                onChange={(e) => setConfirmPass(e.target.value)}
              ></input>
              {}
              {errors.Password?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {errors.ConfirmPassword?.message}
                </span>
              )}
            </div>
          </>
        ) : (
          ""
        )}
        {formStep === 1 ? (
          <>
            <div className="inputFields">
              <label>Name</label>
              <input
                type="text"
                {...register("Name", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.Name?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  name is required
                </span>
              )}
            </div>
            <div className="inputFields">
              <label>You are </label>
             
   
              <select
              name="userType"
              id="userType"
              {...register("userType", { required: true })}
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>


              {errors.Name?.type === "userType" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  Please Select the user Type
                </span>
              )}
            </div>

            <div className="inputFields">
              <label>DOB</label>
              <input type="date" {...register("Dob", { required: true })} />
              {errors.Name?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  Dob is required
                </span>
              )}
            </div>
          </>
        ) : (
          ""
        )}
        {formStep === 2 ? (
          <>
            <div className="inputFields">
              <label>Institution Name *</label>
              <input
                type="Institution Name"
                {...register("institution", { required: true })}
              />
              {errors.institution?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  Institution Name Required
                </span>
              )}
            </div>
            <div className="inputFields">
              <label>Institution Registration {userType==='teacher'?'':' No/Roll No'}</label>
              <input
                type="number"
                {...register("IdNumber", { required: true })}
              />
              {errors.IdNumber?.type === "required" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  Registration /RollNo Name is Required
                </span>
              )}
            </div>
            {
              userType  !== 'teacher'?
              <> <div className="inputFields">
              <label>Select  Group </label>
              <select      name="group"
              id="group" {...register("group", { required: true })}
             >
                <option value='1'>(4th-7th)Foundational stage</option>
                <option value='2'>(8th-10th)Preparatory stage</option>
                <option value='3'>(11th-12th)Middle stage</option>
                <option value='3'>(11th-12th)Secondary stage</option>
                <option value='4'>(11th-12th)College / University</option>
              </select>
              {errors.Name?.type === "group" && (
                <span style={{ color: "red", fontSize: "0.8rem", margin: "0" }}>
                  {" "}
                  Please Select the Educational Type
                </span>
              )}
            </div>
            
           

            
            </>:''
            }
           
          </>
        ) : (
          ""
        )}
        {formStep === 3 ? (
          <>
            <label>Select Profile Picture</label>
            <div className="filesImg">
              <FileBAse
                type="files"
                multiple={false}
                onDone={({ base64 }) => setProfileImg({ selectFile: base64 })}

             ></FileBAse>{" "}
            </div>
            <label>Select Institution ID</label>
            <div className="filesImg">
              <FileBAse
                type="files"
                multiple={false}
                onDone={({ base64 }) => setIdImg({ selectFile: base64 })}
              ></FileBAse>{" "}
            </div>
           
          
          </>
        ) : (
          ""
        )}
        {formStep === 4 ? (
          <>
            <div className="submitMessage">
              <b className="thanks">Thanks For Choosing Heuristic</b>
              <p>Please Be Updated With Email We Will Reach You Soon</p>
            </div>
          </>
        ) : (
          ""
        )}
        {formStep < 4 ? (
          renderButtons()
        ) : (
          <button className="login" onClick={() => navigate("/")}>
            Go Back
          </button>
        )}
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        {formStep < 4 ? (
          <>
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
            <p style={{ marginTop: "10px" }} onClick={() => navigate("/Login")}>
              Already Have an Account ? <strong>Login</strong>
            </p>
          </>
        ) : (
          ""
        )}
      </form>
      <Img className="image"></Img>
    </section>
  );
}

export default Login;
