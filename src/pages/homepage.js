import React from "react";
import Header from "../components/header.js";
import Home from '../components/home.js';
import About from "../components/about.js";
import Mission from '../components/mission.js'
import Testimonials from '../components/testimonials.js'
import Footer from '../components/footer.js'
import "./style/homepage.scss";
function homepage() {
  return (
    <div className="homepage">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Mission></Mission>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default homepage;
