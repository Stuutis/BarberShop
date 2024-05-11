import { NavigationLink } from "./navigationLink";
import {
  InstagramLogo,
  WhatsAppIcon,
  FacebookIcon,
} from "../../assets/svg/svgs";

export function Navigation() {
  return (
    <nav className="bg-black bg-opacity-80 h-20 flex flex-col justify-center items-center gap-2 sticky top-0 z-10">
      <div>
        <ul className="flex gap-3 text-slate-200">
          <NavigationLink linkDirection="#home" title="Home" />
          <NavigationLink linkDirection="#about" title="Sobre" />
          <NavigationLink linkDirection="#services" title="Serviços" />
          <NavigationLink linkDirection="#contact" title="Contato" />
        </ul>
      </div>
      <ul className="flex gap-6">
        <NavigationLink
          linkDirection="https://instagram.com"
          hasIcon
          icon={<InstagramLogo />}
        />
        <NavigationLink
          linkDirection="https://instagram.com"
          hasIcon
          icon={<FacebookIcon />}
        />
        <NavigationLink
          linkDirection="https://instagram.com"
          hasIcon
          icon={<WhatsAppIcon />}
        />
      </ul>
    </nav>
  );
}
