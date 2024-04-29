import React from "react";
import "../style/forbes.css";
import zero_img from "../image/“.png";
import zero_img2 from "../image/”.png";
import for_img from "../image/press logo.png";
import for_img2 from "../image/press logo (1).png";
import for_img3 from "../image/press logo (2).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Forbes() {
  return (
    <section className="forbes">
      <div className="container">
        <Swiper
          slidesPerView={3}
          pagination={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            800: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            {" "}
            <div className="for__wrapper">
              <div className="forbes__card">
                <div className="card__content">
                  <img src={zero_img} alt="" />
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <img src={zero_img2} alt="" />
                </div>
                <img className="for__img" src={for_img} alt="" />
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="for__wrapper">
              <div className="forbes__card">
                <div className="card__content">
                  <img src={zero_img} alt="" />
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <img src={zero_img2} alt="" />
                </div>
                <img className="for__img" src={for_img2} alt="" />
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="for__wrapper">
              <div className="forbes__card">
                <div className="card__content">
                  <img src={zero_img} alt="" />
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <img src={zero_img2} alt="" />
                </div>
                <img className="for__img" src={for_img3} alt="" />
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="for__wrapper">
              <div className="forbes__card">
                <div className="card__content">
                  <img src={zero_img} alt="" />
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <img src={zero_img2} alt="" />
                </div>
                <img className="for__img" src={for_img} alt="" />
              </div>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Forbes;
