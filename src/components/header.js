/* eslint-disable no-unused-expressions */
import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import "./style/header.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./style/Navbar.css";
import {useUserAuth} from "../context/userAuthContext.js"

const Header = () => {
  const {user,signOut}=useUserAuth();
  // console.log(user.uid);
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
      <b>
        HEURISTIC

      </b>
      <ul className="header_nav">

      {
        SidebarData.map((data)=>(
          <li>{data.title}</li>
          ))
        }
        </ul>
        {
          user?.uid?( <button  onClick={signOut}>
          Sign Out
        </button>):( <button  onClick={()=>navigate('/login')}>
          Login
        </button>)
        }
       
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
