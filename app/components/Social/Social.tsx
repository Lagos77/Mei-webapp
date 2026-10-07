import { FaYoutube, FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa6";
import "./Social.css";

const links = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@MisionEvangelicaInternacional",
    icon: <FaYoutube />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Misi%C3%B3n-Evang%C3%A9lica-Internacional-MEI-Stockholm-100068344210689/",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/misionevangelicainternacional_/",
    icon: <FaInstagram />,
  },
  { name: "Spotify", href: "https://spotify.com/", icon: <FaSpotify /> },
  {
    name: "MEI Youth",
    href: "https://www.instagram.com/mei.sthlm/",
    icon: <img src="/youth.svg" alt="" />,
  },
];

export function Social() {
  return (
    <section className="social">
      {links.map(({ name, href, icon }) => (
        <a
          key={name}
          className="social-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon">{icon}</span>
          <span className="social-label">{name}</span>
        </a>
      ))}
    </section>
  );
}
