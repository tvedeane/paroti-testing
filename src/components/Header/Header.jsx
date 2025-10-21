import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Topbar from "../Topbar/Topbar";
import NavItems from "./NavItems";
import { Link } from "gatsby-plugin-react-i18next";
import { useLocation } from "@reach/router";
import { useRootContext } from "@/Provider/context";
import useScroll from "@/hooks/useScroll";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const Header = () => {
  const { language, languages, changeLanguage } = useI18next();
  /*
  Add language switcher:
  // const { language, languages, changeLanguage } = useI18next();

  */
  // const { language } = useI18next();
  const { navItems, main_logo } = getData(language, "HeaderData");
  const { handleToggle, toggleSearch } = useRootContext();
  const scrollTop = useScroll(130);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header
      className={`main-header ${
        pathname === "/home2/"
          ? "main-header--three main-header--two"
          : pathname === "/home3/"
          ? "main-header--three"
          : ""
      }`}
    >
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lng);
              }}
            >
              {lng}
            </a>
          </li>
        ))}
      </ul>
      <Topbar />
      <nav
        className={
          scrollTop
            ? `sticky-header  main-menu ${
                pathname === "/home2/" || pathname === "/home3/"
                  ? "main-menu--three"
                  : ""
              } sticky-header--cloned sticky-fixed slideInDown animated clearfix`
            : `sticky-header  main-menu ${
                pathname === "/home2/"
                  ? "main-menu--three"
                  : pathname === "/home3/"
                  ? "main-menu--three"
                  : ""
              } slideIn animated clearfix`
        }
      >
        <div className="container-fluid">
          <Link to="/" className="main-header__logo">
            <Image
              relativePath={main_logo}
              width={127}
              height={49}
              alt="logo"
            />
          </Link>

          <ul className="main-menu__list">
            {navItems.map((navItem) => (
              <NavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>

          <div className="main-menu__right">
            <div className="main-menu__cta">
              <div className="main-menu__cta__icon">
                <i className="paroti-icon-volunteer"></i>
              </div>
              <div className="main-menu__cta__text">
                <span>Join us now</span>
                <Link to="/contact">Become a Volunteer</Link>
              </div>
            </div>
            <Link to="/donations-details" className="thm-btn thm-btn--two ">
              <span>Donate Now</span>
              <i>
                <FontAwesomeIcon
                  style={{ width: "14px" }}
                  icon={faHeart}
                ></FontAwesomeIcon>
              </i>
            </Link>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => toggleSearch()}
              className="main-header__btn search-toggler"
            >
              <i className="paroti-icon-magnifying-glass"></i>
            </div>
            <Link to="/donations" className="main-header__btn">
              <i className="paroti-icon-shopping-cart"></i>
            </Link>
            <div
              style={{ cursor: "pointer" }}
              onClick={handleToggle}
              className="main-header__toggler mobile-nav__toggler"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
