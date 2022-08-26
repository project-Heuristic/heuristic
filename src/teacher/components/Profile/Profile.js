import React, { useContext } from 'react'
import { TeacherContext } from '../../../context/teacherContext';
import './Profile.scss'
export default function Profile() {
  const teacher =useContext(TeacherContext);
  console.log(teacher)
  return (
   
    <div className='UserProfile'>
      <b className='heading'>Profile</b>
      <div className='avatar'>
        <img src={teacher.photoURL.selectFile} alt='user'></img>
        {/* {
          teacher.photoURL?
        

          :
          <img src='https://i.pravatar.cc/300' alt='user'></img>
        } */}
      </div>
      <div className='profile_cont'>
        <span>
          <b>Name :</b>
          <b>{teacher.displayName}</b>
        </span>
        <span>
          <b>Email :</b>
          <b>{teacher.Email}</b>
        </span>
        <span>
          <b>Dob :</b>
          <b>{teacher.Dob}</b>
        </span>
        <span>
          <b>institution :</b>
          <b>{teacher.institution}</b>
        </span>
        <span>
          <b>institution Id :</b>
          <b>{teacher.IdNumber}</b>
        </span>
       {/* <button>Edit</button> */}
       
      </div>
    </div>
  )
}
