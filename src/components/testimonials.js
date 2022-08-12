import "./style/testimonial.scss";
import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
function Testimonials() {
  return (
    <div id="testimonials">
      <b>What our users say</b>

      <div className="clients">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
  
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
          effect="fade"
        >
          <SwiperSlide>
            <div className="client">
              <div className="image">
                <Avatar
                  alt="Remy Sharp"
                  className="avtarImage"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
              <div className="client_box">
                <p>
                  heuristic helps me to develop my skills and my personality and
                  i feel much more confident now.
                </p>
                <div className="line" />
                <div className="user_review">
                  <div className="user_desc">
                    <strong>Shivdutt Bibhar</strong>
                    <span>Amazon Employe</span>
                  </div>
                 
                                   <Rating name="simple-controlled" value={5} />

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client">
              <div className="image">
                <Avatar
                  alt="Remy Sharp"
                  className="avtarImage"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
              <div className="client_box">
                <p>
                  heuristic helps me to develop my skills and my personality and
                  i feel much more confident now.
                </p>
                <div className="line" />
                <div className="user_review">
                  <div className="user_desc">
                    <strong>Shivdutt Bibhar</strong>
                    <span>Amazon Employe</span>
                  </div>
                 
                                   <Rating name="simple-controlled" value={5} />

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client">
              <div className="image">
                <Avatar
                  alt="Remy Sharp"
                  className="avtarImage"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
              <div className="client_box">
                <p>
                  heuristic helps me to develop my skills and my personality and
                  i feel much more confident now.
                </p>
                <div className="line" />
                <div className="user_review">
                  <div className="user_desc">
                    <strong>Shivdutt Bibhar</strong>
                    <span>Amazon Employe</span>
                  </div>
                 
                                   <Rating name="simple-controlled" value={5} />

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client">
              <div className="image">
                <Avatar
                  alt="Remy Sharp"
                  className="avtarImage"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
              <div className="client_box">
                <p>
                  heuristic helps me to develop my skills and my personality and
                  i feel much more confident now.
                </p>
                <div className="line" />
                <div className="user_review">
                  <div className="user_desc">
                    <strong>Shivdutt Bibhar</strong>
                    <span>Amazon Employe</span>
                  </div>
                 
                                   <Rating name="simple-controlled" value={5} />

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client">
              <div className="image">
                <Avatar
                  alt="Remy Sharp"
                  className="avtarImage"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
              <div className="client_box">
                <p>
                  heuristic helps me to develop my skills and my personality and
                  i feel much more confident now.
                </p>
                <div className="line" />
                <div className="user_review">
                  <div className="user_desc">
                    <strong>Shivdutt Bibhar</strong>
                    <span>Amazon Employe</span>
                  </div>
                  <Rating
                    name="simple-controlled"
                    value={5}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
