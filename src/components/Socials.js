import * as simpleIcons from "simple-icons";
import { FaLinkedinIn } from "react-icons/fa";


const linkedin = { icon: FaLinkedinIn, url: "https://linkedin.com/in/ojasgoyalx" }

export default function Socials() {
  const tech = [
    { icon: simpleIcons.siX, url: "https://x.com/ojasgoyalx" },
    { icon: simpleIcons.siGithub, url: "https://github.com/ojasgoyal" },
    { icon: simpleIcons.siInstagram, url: "https://instagram.com/ojasgoyalx" },
    { icon: simpleIcons.siYoutube, url: "https://youtube.com/@ojasgoyalyt" },
    { icon: simpleIcons.siGmail, url: "mailto:ojasgoyal05@gmail.com" },
  ];

  return (
    <div className="p-4 flex items-center gap-5">
    <a key={linkedin.icon.title} href={linkedin.url} className="bg-blue-700 p-1.5 rounded-lg transition-all duration-100 hover:scale-110" target="_blank">
        <linkedin.icon size={24} color="#FFFFFF"/>
    </a>
      {tech.map(({ icon, url }) => (
        <a key={icon.slug} href={url} target="_blank">
          <svg
            key={icon.slug}
            viewBox="0 0 24 24"
            width="32"
            height="32"
            role="img"
            aria-label={icon.title}
            className="hover:scale-110 transition-all duration-100"
          >
            <title>{icon.title}</title>
            <path d={icon.path} fill={`#${icon.hex}`} />
          </svg>
        </a>
      ))}
    </div>
  );
}
