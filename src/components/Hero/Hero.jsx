import React from "react";
import "./hero.scss";
import DOG from "./../../assets/img/Img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0} 
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true} 
        className="swiper"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="hero__inner">
              <div className="hero__image">
                <img src={DOG} alt="Dog" />
              </div>

              <div className="hero__content">
                <div className="hero__label">
                  SAVE {slide * 10} - {slide * 20}% OFF
                </div>

                <h1 className="hero__title">
                  Best Destination <br />
                  For <span>Your Pets</span>
                </h1>

                <button className="hero__btn">SHOP NOW →</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;