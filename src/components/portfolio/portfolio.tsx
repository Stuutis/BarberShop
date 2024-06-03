import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import image1 from "../../../src/assets/pictures/amritpal-singh-wE-GAKR9WaY-unsplash.jpg";
import image2 from "../../../src/assets/pictures/salah-regouane-8HkPnJhC5Ic-unsplash.jpg";
import image3 from "../../../src/assets/pictures/ahmad-ebadi-zAsMbiVW5-M-unsplash.jpg";
import { AgendarButton } from "../agendar-button";

export function Portfolio() {
  return (
    <div className="m-auto max-w-[80vw] pb-10">
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
        loop
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide className="flex justify-center">
          <img
            className="rounded-xl sm:max-h-[60vh] sm:w-1/2 lg:w-3/4 2xl:w-3/4"
            src={image1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="rounded-xl sm:max-h-[60vh] sm:w-1/2 lg:w-3/4 2xl:w-3/4"
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="rounded-xl sm:max-h-[60vh] sm:w-1/2 lg:w-3/4 2xl:w-3/4"
            src={image3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="rounded-xl sm:max-h-[60vh] sm:w-1/2 lg:w-3/4 2xl:w-3/4"
            src={image1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="rounded-xl sm:max-h-[60vh] sm:w-1/2 lg:w-3/4 2xl:w-3/4"
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <img
            className="rounded-xl sm:max-h-[60vh] sm:w-1/2 lg:w-3/4 2xl:w-3/4"
            src={image3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col items-center justify-center m-10 gap-5">
        <p>
          Agende já seu horario e garanta o melhor estilo pelo melhor preço!
        </p>
        <AgendarButton />
      </div>
    </div>
  );
}
