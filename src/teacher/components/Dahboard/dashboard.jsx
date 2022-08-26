import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Session } from "../../../assets/sessions.svg";
import { TeacherContext } from '../../../context/teacherContext';
import "./dashboard.scss"
export default function Dashboard() {
  const teacher =useContext(TeacherContext);
 const navigate=useNavigate();
  return (
   
    <div className="MainDash">
 
    <div className="main">
      <b>Teachers Panel</b>

      <p>Welcome Sir {teacher.Name}</p>

      <div className="profile" style={{cursor:'pointer'}} onClick={()=>navigate('/teacher/profile')}>
        <i class="ri-notification-2-fill"></i>
        <p>{teacher.Name}</p>
        <img src={teacher.photoURL.selectFile} alt='user'></img>
      </div>
      <div className="cards">
        <b style={{ color: "green", fontSize: "1.4rem" }}> Students Verify</b>

        <div className="students">
          <div className="student">
            <span>
              Name: <p>Mohon</p>
            </span>
            <span>
              Shool ID: <p>1222221</p>
            </span>
            <span>
              Adhar No: <p>1323232</p>
            </span>
            <span>
              Dob: <p>11/22/0200</p>
            </span>
            <span>
              Class: <p>6tth</p>
            </span>
            <button>Verify</button>
          </div>
          <div className="student">
            <span>
              Name: <p>Mohon</p>
            </span>
            <span>
              Shool ID: <p>1222221</p>
            </span>
            <span>
              Adhar No: <p>1323232</p>
            </span>
            <span>
              Dob: <p>11/22/0200</p>
            </span>
            <span>
              Class: <p>6tth</p>
            </span>
            <button>Verify</button>
          </div>
          <div className="student">
            <span>
              Name: <p>Mohon</p>
            </span>
            <span>
              Shool ID: <p>1222221</p>
            </span>
            <span>
              Adhar No: <p>1323232</p>
            </span>
            <span>
              Dob: <p>11/22/0200</p>
            </span>
            <span>
              Class: <p>6tth</p>
            </span>
            <button>Verify</button>
          </div>
        </div>

        <b style={{ color: "green", fontSize: "1.4rem" }}> Booking Slots</b>
        <div className="sessions">
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
              Session Booked
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button style={{ background: "#d00000" }}>Cancel</button>
              <button>View</button>
            </div>
          </div>
          <div className="session">
            <Session className="sessionImg"></Session>
            <b
              style={{
                fontSize: "1.2rem",
                margin: "1rem auto",
                color: "var(--color-four)",
              }}
              >
              Session Booked
            </b>
            <span>
              Session Day<p>25Th Aug 2022</p>
            </span>
            <span>
              Session Time <p>11:30Am</p>
            </span>
            <div className="buttons">
              <button style={{ background: "#d00000" }}>Cancel</button>
              <button>View</button>
            </div>
          </div>MOTHERBOARD
        </div>
       
       
      </div>
    </div>
  </div>
  )
}
