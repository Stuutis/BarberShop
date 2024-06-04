import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { ScrollToTopOnMount } from "./utils/scrollToTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnMount />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
