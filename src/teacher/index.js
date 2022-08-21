import React from 'react'
import './student.css'
import TeacherDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { useUserAuth } from '../context/userAuthContext';
import { useHistory, useParams ,useLocation} from 'react-router-dom'
function Students() {
  const {state} = useLocation()
  console.log('datdddddddddddddddddddda',state);
  const {user,signOut}=useUserAuth();
  console.log(user);
  console.log("hii")
  console.log('dasdas')
  return (
    <div className="student">
      <div className="AppGlass">
        <Sidebar/>
        <TeacherDash teacher={state}/>
        
        {/* <RightSide/> */}
      </div>
    </div>
  )
}

export default Students