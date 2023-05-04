/* eslint-disable react/prop-types */
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./product-slider.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductSlider(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={props.curr_product.first_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.curr_product.sec_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.curr_product.third_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.curr_product.forth_image} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={props.curr_product.first_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.curr_product.sec_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.curr_product.third_image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.curr_product.forth_image} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
