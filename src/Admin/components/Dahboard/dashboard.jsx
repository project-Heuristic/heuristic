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

      <p>Welcome Admin {teacher.Name}</p>

      
    </div>
  </div>
  )
}
