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
    <footer id="contact" className="px-4 py-4 bg-footer-custom ">
      <div className=" flex flex-col gap-5 items-center md:mx-10 md:flex-row md:justify-between lg:justify-center lg:gap-24">
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.57569459738!2d-73.9828292522287!3d40.74936110235218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1spt-BR!2sbr!4v1717429004355!5m2!1spt-BR!2sbr"
          width="240"
          height="240"
          className="rounded-3xl md:block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
