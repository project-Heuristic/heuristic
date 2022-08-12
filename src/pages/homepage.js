import React, { useEffect } from "react";
import Header from "../components/header.js";
import Home from '../components/home.js';
import About from "../components/about.js";
import Mission from '../components/mission.js'
import Testimonials from '../components/testimonials.js'
import Footer from '../components/footer.js'
import "./style/homepage.scss";
import { useUserAuth } from "../context/userAuthContext.js";
function Homepage() {
  const {user}=useUserAuth();
  console.log(user);
  return (
    <div className="homepage">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Mission></Mission>
      {/* <Testimonials></Testimonials> */}
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
