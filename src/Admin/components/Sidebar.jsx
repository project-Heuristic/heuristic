import React, { useState } from "react";
import "./Sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {useUserAuth} from '../../context/userAuthContext.js'
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
const navigate=useNavigate();
  const [expanded, setExpaned] = useState(true);
  const {user,signOut}=useUserAuth();
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
    
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        
        <b className="logo">HEURISTIC</b>

        <div className="menu">
          {SidebarData.map((item, index,link) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() =>{ setSelected(index); navigate(item.link)}}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt onClick={()=>signOut()} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
