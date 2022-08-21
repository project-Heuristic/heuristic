import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {

  return (
    <div className="MainDash">
      <header className="header">
        <b>Dashboard</b>
        {/* <i class="ri-user-3-fill"></i> */}
      </header>
     <div className="main">
      <b>Welcome Back</b>
      <br />
     <p>John Doe</p> 
     <div className="profile">
      <p>john doe</p>
      <img src="https:i.pravatar.cc/300" alt="" />
     </div>
     <div className="cards">

     <Cards></Cards>
     </div>
      <p>Recomended Videos</p>
     {/* <div className="videos">
      <div className="video">
        <video src="../../../assets/dummy.mp4" controls></video>
      </div>
      <div className="video">
        <video src="../../../assets/dummy.mp4" controls></video>
      </div>
      <div className="video">
        <video src="../../../assets/dummy.mp4" controls></video>
      </div>
        <div className="video">
        <video src="../../../assets/dummy.mp4" controls></video>
      </div>
     </div> */}

{/* <Table></Table> */}
     </div>
    </div>
  );
};

export default MainDash;
