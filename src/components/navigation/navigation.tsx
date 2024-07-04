import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavigationLink } from "./navigationLink";
import {
  InstagramLogo,
  WhatsAppIcon,
  FacebookIcon,
} from "../../assets/svg/svgs";
import { AgendarButton } from "../agendar-button";
import { useUser } from "../../context/userContext";
import logo from "../../assets/pictures/logo.jpeg";

export function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const { userName, isLoggedIn, logout } = useUser();
  const checkWindowWidth = () => {
    setIsWideScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <nav className="bg-section-custom  h-20 flex items-center gap-2 sticky top-0 z-10 rounded-b-2xl">
      <div>
        <section className="flex items-center ">
          <h1 className="pl-4 text-xl lg:hidden text-text-custom">
            BarberShop
          </h1>

          <div
            className="mx-8 space-y-2 absolute right-0 lg:hidden"
            // Toggle isNavOpen state on click
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-text-custom"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-text-custom"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-text-custom"></span>
          </div>
          <div
            className={
              isNavOpen
                ? "flex flex-col justify-evenly items-center absolute w-full h-screen top-0 left-0 bg-bg-custom z-10"
                : isWideScreen
                ? "flex flex-row justify-evenly items-center w-screen m-auto"
                : "hidden"
            }
          >
            <div
              className={
                isWideScreen ? "hidden" : "absolute top-0 right-0 px-8 py-8"
              }
              // Change isNavOpen state to false
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-9 w-9"
                viewBox="0 0 24 24"
                fill="whitesmoke"
                stroke="whitesmoke"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col items-center  justify-center lg:flex-row">
              <img
                className="rounded-2xl size-32 mb-5 sm:size-48 lg:size-10 lg:mb-0 lg:mx-6"
                src={logo}
                alt=""
              />

              <div className="mb-3 lg:mb-0">
                {isLoggedIn && (
                  <p className="text-text-custom">Bem-vindo, {userName}</p>
                )}
              </div>
              <ul className="flex flex-col items-center gap-3 text-slate-200 lg:flex-row lg:pl-3">
                <NavigationLink linkDirection="/#home" title="Home" />
                <NavigationLink linkDirection="/#about" title="Sobre" />
                <NavigationLink linkDirection="/#services" title="Serviços" />
                <NavigationLink linkDirection="/#contact" title="Contato" />
                <NavigationLink linkDirection="/#portfolio" title="Portfolio" />
              </ul>
            </div>
            {isLoggedIn ? (
              <div>
                <button className="text-text-custom cursor-pointer">
                  <Link to={"/Agendamentos"}>Meus Agendamentos</Link>
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-col items-center gap-6 text-lg lg:flex-row">
              <p className="lg:hidden text-text-custom">
                Nos siga nas redes sociais
              </p>
              <ul className="flex gap-6">
                <NavigationLink
                  linkDirection="https://instagram.com"
                  hasIcon
                  icon={<InstagramLogo />}
                />
                <NavigationLink
                  linkDirection="https://facebook.com"
                  hasIcon
                  icon={<FacebookIcon />}
                />
                <NavigationLink
                  linkDirection="https://instagram.com"
                  hasIcon
                  icon={<WhatsAppIcon />}
                />
              </ul>
              <div>
                <AgendarButton
                  haveDirection
                  text="Agendar Horário"
                  linkDirection={`${isLoggedIn ? "/Agendamento" : "/login"}`}
                />
              </div>
              {isLoggedIn && (
                <button
                  onClick={logout}
                  className="text-text-custom cursor-pointer"
                >
                  Sair
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
