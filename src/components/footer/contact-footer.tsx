import {
  FacebookIcon,
  InstagramLogo,
  LocationIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../../assets/svg/svgs";
import { ContactLink } from "./contact-link";

export function ContactFooter() {
  return (
    <footer id="contact" className="px-4 py-4 bg-footer-custom">
      <div>
        <ul className="flex flex-col gap-4">
          <ContactLink
            icon={<FacebookIcon />}
            text="Nos siga no Facebook"
            linkDirection=""
          />
          <ContactLink
            icon={<WhatsAppIcon />}
            text="Agende seu horario pelo nosso Whats"
            linkDirection=""
          />
          <ContactLink
            icon={<InstagramLogo />}
            text="Nos siga no Instagram"
            linkDirection=""
          />
          <ContactLink icon={<LocationIcon />} text="Rua " linkDirection="" />
          <ContactLink
            icon={<PhoneIcon />}
            text="(99) 94002-8922"
            linkDirection=""
          />
        </ul>
      </div>
    </footer>
  );
}
