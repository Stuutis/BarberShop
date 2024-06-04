import { Navigation } from "../components/navigation/navigation";
import { About } from "../components/about/about";
import { HomeCarousel } from "../components/carousel/home-carousel";
import { ServicesCarousel } from "../components/carousel/services-carousel";
import { ContactFooter } from "../components/footer/contact-footer";
import { Portfolio } from "../components/portfolio/portfolio";

export function Home() {
  return (
    <div className="bg-bg-custom text-text-custom" id="home">
      <Navigation />
      <HomeCarousel />
      <About />
      <ServicesCarousel />
      <Portfolio />
      <ContactFooter />
    </div>
  );
}
