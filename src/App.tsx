import { About } from "./components/about/about";
import { HomeCarousel } from "./components/carousel/home-carousel";
import { Navigation } from "./components/navigation/navigation";
import "swiper/css";
import "swiper/css/pagination";
export function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Navigation />
      <HomeCarousel />
      <About />
    </div>
  );
}
