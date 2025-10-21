import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import { useRootContext } from "@/Provider/context";
import MobileNavItems from "./MobileNavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const MobileNav = () => {
  const { language } = useI18next();
  const { social, navItems, logo_light } = getData(language, "HeaderData");
  const { isExpanded, handleToggle } = useRootContext();
  return (
    <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
      <div
        onClick={handleToggle}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <a
          href="#"
          onClick={handleToggle}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <span></span>
          <span></span>
        </a>

        <div className="logo-box">
          <Link to="/">
            <Image
              width={127}
              height={49}
              relativePath={logo_light}
              alt="Paroti"
            />
          </Link>
        </div>

        <div className="mobile-nav__container">
          <ul className="mobile-menu__list">
            {navItems.map((navItem) => (
              <MobileNavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            88 Broklyn Golden Road Street <br /> New York. USA
          </li>
        </ul>
        <ul className="mobile-nav__social">
          {social.map(({ icon, link }, index) => (
            <li key={index}>
              <Link to={link}>
                <FontAwesomeIcon icon={icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
