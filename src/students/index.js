import React from 'react'
import './student.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
function Students() {
  return (
    <div className="student">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        
        {/* <RightSide/> */}
      </div>
    </div>
  )
}

export default Students