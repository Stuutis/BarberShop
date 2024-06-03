import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import { SlideContent } from "./slide-content";
import product from "../../../src/assets/pictures/barber.png";
import barber from "../../../src/assets/pictures/barbershop.png";
import hairStyle from "../../../src/assets/pictures/hairstyle.png";
import calendar from "../../../src/assets/pictures/calendar.png";

export function ServicesCarousel() {
  return (
    <div className="max-w-[80vw] m-auto pb-10" id="services">
      <div className="flex justify-center">
        <h1 className="text-4xl mb-5">Serviços</h1>
      </div>
      <Swiper
        loop
        slidesPerView={1.1}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination]}
        className="pb-10"
      >
        <SwiperSlide className="bg-secondary-custom rounded-xl flex flex-col justify-center items-center text-center ">
          <SlideContent
            titleText="Corte de Cabelo"
            imageSrc={barber}
            contentText="Transforme seu visual com um corte de cabelo personalizado. Nossos
              barbeiros são especialistas em todos os estilos, desde o clássico
              ao moderno."
            altText=""
          />
        </SwiperSlide>
        <SwiperSlide className="bg-secondary-custom  rounded-lg flex flex-col justify-center items-center text-center">
          <SlideContent
            titleText="Produtos de qualidade"
            imageSrc={product}
            contentText="Descubra nossa linha premium de produtos para cabelo, barba e pele. Cuide-se com shampoos, condicionadores, óleos e bálsamos especialmente selecionados para você."
            altText={""}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-secondary-custom  rounded-lg flex flex-col justify-center items-center text-center">
          <SlideContent
            imageSrc={hairStyle}
            titleText="Barba e Bigode"
            contentText="Deixe sua barba e bigode impecáveis com nossos serviços de cuidados. Modelagem, aparo e acabamento perfeito para um visual elegante"
            altText=""
          />
        </SwiperSlide>
        <SwiperSlide className="bg-secondary-custom  rounded-lg flex flex-col justify-center items-center text-center">
          <SlideContent
            imageSrc={calendar}
            titleText="Assinatura Mensal"
            contentText="Pague uma taxa fixa mensal e tenha cortes ilimitados! Mantenha seu visual sempre impecável com nosso serviço de assinatura. "
            altText=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
