import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../../assets/pictures/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg";
import image2 from "../../assets/pictures/eugene-chystiakov-taZSJ6xmt48-unsplash.jpg";
import image3 from "../../assets/pictures/jason-leung-2seUdPQNy_I-unsplash.jpg";
import { HomeCarouselContent } from "./home-carousel-content";

export function HomeCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      modules={[Autoplay, Pagination]}
      className="h-[60vh] xl:mx-auto xl:max-w-[80vw] 2xl:max-w-[60vw]"
      loop
      id="home"
    >
      <SwiperSlide>
        <HomeCarouselContent
          imageSource={image1}
          text=" Transforme seu visual com um corte de cabelo personalizado feito por
            nossos barbeiros experientes. Eles são especialistas em todos os
            estilos, desde o clássico ao moderno, garantindo que você sempre
            saia satisfeito"
          altText={""}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HomeCarouselContent
          imageSource={image2}
          text="Deixe sua barba e bigode impecáveis com nossos serviços de cuidados especializados. Oferecemos modelagem, aparo e acabamento perfeito para um visual elegante e bem cuidado."
          altText={""}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HomeCarouselContent
          imageSource={image3}
          text="Apresentamos nosso inovador Plano Mensal de Assinatura, ideal para homens que desejam manter um visual impecável sem complicações. Por um valor fixo mensal, você terá acesso ilimitado a cortes de cabelo e outros serviços essenciais, garantindo que você esteja sempre no seu melhor"
          altText={""}
        />
      </SwiperSlide>
    </Swiper>
  );
}
