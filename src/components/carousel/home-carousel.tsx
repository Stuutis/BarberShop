import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import image1 from "../../assets/pictures/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg";
import image2 from "../../assets/pictures/eugene-chystiakov-taZSJ6xmt48-unsplash.jpg";
import image3 from "../../assets/pictures/jason-leung-2seUdPQNy_I-unsplash.jpg";

export function HomeCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={true}
      modules={[Pagination]}
      className="h-[60vh]"
      loop
    >
      <SwiperSlide>
        <img className="object-cover h-[60vh] w-screen" src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="object-cover h-[60vh] w-screen" src={image2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="object-cover h-[60vh] w-screen" src={image3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
