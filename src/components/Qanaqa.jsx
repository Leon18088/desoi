import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/knopka.css";
import right_img from "../image/dark_rig.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import arrow from "../image/variety pack placeholder.png";
import star from "../image/#.png";
import face from "../image/f_dark.png";
import linkedin from "../image/p1.png";
import insta from "../image/mail.png";
import ar_dark from "../image/Arrow 3.png";
import novda from "../image/novda.png";
import nok from "../image/nok.png";
import uzum from "../image/uzum.png";
import Accordion from "./Accardion";

function Qanaqa() {
  const [isFirstButtonClicked, setIsFirstButtonClicked] = useState(false);

  const handleFirstButtonClick = () => {
    setIsFirstButtonClicked(true);
  };

  const handleSecondButtonClick = () => {
    setIsFirstButtonClicked(false);
  };

  return (
    <section className="oddiy">
      <div className="shop__hop">
        <h4>Home</h4>
        <img src={right_img} alt="" />
        <p>Beverages</p>
      </div>
      <div className="container">
        <div className="oddiy__wrapper">
          <div className="oddiy__card">
            <h4>Non-Alcoholic drink</h4>
            <h2>Medium - bodied</h2>
            <p>Light and easy to sip</p>
            <img src={star} alt="" />
            <hr className="chiziq" />
            <h6>
              Made with natural birch, Strawberry and Apricot, an earthy and
              fruity taste.{" "}
            </h6>
            <ul className="oddiy__item">
              <li>・100% Natural ingredients</li>
              <li>・Low Calories </li>
              <li>・Perfect for every occassion</li>
            </ul>
            <hr className="chiziq" />
            <div className="oddiy__link">
              <h4>Share on</h4>
              <img src={face} alt="" />
              <img src={linkedin} alt="" />
              <img src={insta} alt="" />
            </div>
            <hr className="chiziq" />
            <div className="str">
              <h5>Shop the can</h5>
              <img src={ar_dark} alt="" />
            </div>
          </div>
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={arrow} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={arrow} alt="" />
              </SwiperSlide>
            </Swiper>
          </>
          <div className="oddiy__card2">
            <h2>$35.59</h2>
            <hr className="chiziq" />
            <h6 className="vapshe">adaptogenic Ingredients</h6>
            <div className="card__item123">
              <div>
                <img src={novda} alt="" />
                <h5>Earl Grey</h5>
              </div>
              <div>
                <img src={nok} alt="" />
                <h5>peach</h5>
              </div>
              <div>
                <img src={uzum} alt="" />
                <h5>pear</h5>
              </div>
            </div>
            <hr className="chiziq" />
            <div className="card__item222">
              <h4>Quantity</h4>
              <p>Complimentary domestic shipping on 2+ bottles.</p>
              <nav>
                <ul className="item__links123">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>6</li>
                  <li>12</li>
                </ul>
              </nav>
            </div>
            <hr className="chiziq" />
            <div className="card__item333">
              <div className="aylana__item">
                <span>
                  <button
                    onClick={handleFirstButtonClick}
                    className={isFirstButtonClicked ? "clicked" : ""}
                  ></button>
                </span>
                <p onClick={handleFirstButtonClick}>
                  $35.59 One time purcahse{" "}
                </p>
              </div>
              <div className="aylana__item">
                <span>
                  <button
                    onClick={handleSecondButtonClick}
                    className={!isFirstButtonClicked ? "clicked" : ""}
                  ></button>
                </span>
                <p onClick={handleSecondButtonClick}>
                  $30.00 Subscription (15% off) <a href="#!">Details</a>
                </p>
              </div>
              <hr className="chiziq" />
              <div className="aylana__item2">
                <p>Free domestic shipping over $50</p>
                <button>Add to bag</button>
              </div>
              <hr className="chiziq" />
              <div className="aylana__item4">
                <Accordion />
              </div>
              <hr className="chiziq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qanaqa;
