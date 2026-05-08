import "./Icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  home: faHome,
  user: faUser,
  mail: faEnvelope,
  github: faGithub,
  linkedin: faLinkedin,
  Instagram: faInstagram
};

export default function Icon({ name,  className="", size = "lg", color = "", ...props }) {
  return (
    <FontAwesomeIcon
      icon={iconMap[name]}
      size={size}
      className={`icon ${className}`}
      style={{ color }}
      {...props}
    />
  );
}