import "./style/testimonial.scss";
import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";
function Testimonials() {
  return (
    <div id="testimonials">
      <b>What our users say</b>

      <div className="clients">
        {/* <div className='btn left'>
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
        </div> */}
        {/* <div className="client">
          <div className="image">
            <img src="/images/user-1.jpg" alt="user"></img>
          </div>
          <div className="client_box">
          <p>
            heuristic helps me to develop my skills and my personality and i
            
            feel much more confident now.
            <hr/>
          </p>
          <hr/>
          <div className="user_review">
            <div className="user_desc">
              <strong >Debasish Barad</strong>
              <span>Amazon Employe</span>
            </div>
          </div>
          </div>
        </div> */}

        <div className="client">
          <div className="image">
            <img src="/images/user-2.jpg" alt="user"></img>
          </div>
          <div className="client_box">
            <p>
              heuristic helps me to develop my skills and my personality and i
              feel much more confident now.
            </p>
            <div className="line" />
            <div className="user_review">
              <div className="user_desc">
                <strong>Shivdutt Bibhar</strong>
                <span>Amazon Employe</span>
              </div>
              <div className="review">
                {/* //condition// */}
                <Star cla></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="image">
            <img src="/images/user-1.jpg" alt="user"></img>
          </div>
          <div className="client_box">
            <p>
              heuristic helps me to develop my skills and my personality and i
              feel much more confident now.
            </p>
            <div className="line" />
            <div className="user_review">
              <div className="user_desc">
                <strong>Debasish Barad</strong>
                <span>Amazon Employe</span>
              </div>
              <div className="review">
                {/* //condition// */}
                <Star cla></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="image">
            <img src="/images/user-8.png" alt="user"></img>
          </div>
          <div className="client_box">
            <p>
              heuristic helps me to develop my skills and my personality and i
              feel much more confident now.
            </p>
            <div className="line" />
            <div className="user_review">
              <div className="user_desc">
                <strong>Jasobanta </strong>
                <span>Amazon Employe</span>
              </div>
              <div className="review">
                {/* //condition// */}
                <Star cla></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='btn left'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
</svg>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
