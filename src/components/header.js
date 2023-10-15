/* eslint-disable no-unused-expressions */
import React, { useState ,useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./style/header.scss";
import { SidebarData } from "./SidebarData";
import "./style/Navbar.css";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import {useUserAuth} from "../context/userAuthContext.js"
import { TeacherContext } from "../context/teacherContext";

const Header = () => {
  const {user,signOut}=useUserAuth();
  
  const teacher =useContext(TeacherContext);
  console.log('👻👻👻');
  console.log(teacher);
  console.log('❤️❤️❤️');
  const [sidebar, setSidebar] = useState(false);
const navigate =useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  const [stickyClass, setStickyClass] = useState("");

  function stickNavbar() {
      let windowHeight = window.scrollY;
      // console.log(windowHeight);
      windowHeight >50 ?setStickyClass('toggle'):setStickyClass('');
  }

  useEffect(() => {
      window.addEventListener("scroll", stickNavbar);
  }, []);

  return (
    <div className={`navigation ${stickyClass}`}>
      <i class="ri-menu-2-line" onClick={()=>showSidebar()} ></i>
      <Bounce left>

      <b>

        HEURISTIC⚡

      </b>
      </Bounce>

      <ul className="header_nav">

      {
        SidebarData.map((data)=>(
          <Fade>
          <li><a href={`#${data.title}`}>{data.title}</a></li>
          </Fade>
          ))
        }
        </ul>
        <Bounce right>
        {
          user?.uid?( <button  onClick={signOut}>
          Sign Out
        </button>):( <button  onClick={()=>navigate('/login')}>
          Login
        </button>)
        }
            </Bounce>
       
        {
         sidebar?
        <aside>
        <div className="heading">

      <b>HEURISTIC</b>
        <i class="ri-close-fill"onClick={()=>showSidebar()}></i>
        </div>
      <ul className="ext_cont">
        {
           SidebarData.map((data)=>(
            <li>{data.title}</li>
            
            ))
        }
      </ul>
    </aside>: ''

        }
    </div>
  );
};

export default Header;
