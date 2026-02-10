import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

const Slider = () => {
  return (
    <div className="hero">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="hero__inner">
            <div className="hero__image">
              <img src="/img/Img.png" alt="Pet" />
            </div>
            <div className="hero__content">
              <div className="hero__label">SAVE 10 - 20 % OFF</div>
              <h1 className="hero__title">Best Destination <br/>
            For <span>Your Pets</span></h1>
              <button className="hero__btn">SHOP NOW →</button>
            </div>
            
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="hero__inner">
            <div className="hero__image">
              <img src="/img/Img.png" alt="Pet" />
            </div>
            <div className="hero__content">
              <div className="hero__label">SAVE 15 - 30 % OFF</div>
              <h1 className="hero__title">Best Destination <br/>
            For <span>Your Pets</span></h1>
              <button className="hero__btn">SHOP NOW →</button>
            </div>
            
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="hero__inner">
            <div className="hero__image">
              <img src="/img/Img.png" alt="Pet" />
            </div>
            <div className="hero__content">
            <div className="hero__label">SAVE 30 - 50 % OFF</div>
              <h1 className="hero__title">Best Destination <br/>
            For <span>Your Pets</span></h1>
              <button className="hero__btn">SHOP NOW →</button>
            </div>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;