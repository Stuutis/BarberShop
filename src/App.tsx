import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Scheduling } from "./pages/scheduling";
import { ScrollToTopOnMount } from "./utils/scrollToTop";
import { UserProvider } from "./context/userContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

export function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ScrollToTopOnMount />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Agendamento" element={<Scheduling />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
