import { About } from "./components/about/about";
import { HomeCarousel } from "./components/carousel/home-carousel";
import { ServicesCarousel } from "./components/carousel/services-carousel";
import { Navigation } from "./components/navigation/navigation";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-creative";
import { ContactFooter } from "./components/footer/contact-footer";

export function App() {
  return (
    <div className="bg-bg-custom text-text-custom" id="home">
      <Navigation />
      <HomeCarousel />
      <About />
      <ServicesCarousel />
      <ContactFooter />
    </div>
  );
}
