import React, { useContext, useEffect, useState } from 'react'

import Sidebar from './components/Sidebar';
import { Outlet} from 'react-router-dom';
import "./students.css"
import  {TeacherContext}  from '../context/teacherContext.js';
function Teacher() {
  const userData=localStorage.getItem('UserData');
  const data=JSON.parse(userData);
console.log(data);
  console.log('joo'+'student🚀🚀🚀')
  
  return (
    <div className="student">
      <div className="AppGlass">
  
        <Sidebar/>
        <TeacherContext.Provider value={data}>
               
        <Outlet></Outlet>
        </TeacherContext.Provider>
       {/* <RightSide></RightSide> */}
      </div>
    </div>
  )
}

export default Teacher