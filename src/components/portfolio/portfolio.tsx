import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import image1 from "../../../src/assets/pictures/amritpal-singh-wE-GAKR9WaY-unsplash.jpg";
import image2 from "../../../src/assets/pictures/salah-regouane-8HkPnJhC5Ic-unsplash.jpg";
import image3 from "../../../src/assets/pictures/ahmad-ebadi-zAsMbiVW5-M-unsplash.jpg";

export function Portfolio() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-3">Portfólio</h1>
        <p className="text-lg text-center mb-3">
          Veja abaixo alguns resultados em nossos clientes.
        </p>
      </div>
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <img className="" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
