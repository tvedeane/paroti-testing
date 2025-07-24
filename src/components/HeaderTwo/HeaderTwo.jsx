
import React from "react";
import headerData from "@/data/HeaderData";

import { Link } from "gatsby";
import NavItems from "../Header/NavItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Topbar from "../Topbar/Topbar";
import { useLocation } from '@reach/router'
import { useRootContext } from "@/Provider/context";
import useScroll from "@/hooks/useScroll";
import Image from "../Image/Image";


const HeaderTwo = () => {
  const { handleToggle, toggleSearch } = useRootContext();
  const scrollTop = useScroll(130);

  const { logo_light, navItems } = headerData;
  const location = useLocation();
  const pathname = location.pathname;


  return (
    <header
      className={`main-header main-header--three ${pathname === "/home2/" ? "main-header--two" : ""
        }`}
    >
      {pathname === "/home2/" ? null : <Topbar />}
      <nav
        className={
          scrollTop
            ? "sticky-header  main-menu main-menu--three sticky-header--cloned sticky-fixed slideInDown animated "
            : "sticky-header  main-menu main-menu--three slideIn animated"
        }

      >
        <div className='container-fluid'>
          <Link to='/' className='main-header__logo'>

            <Image relativePath={logo_light} width={127} height={49} alt='logo' />
          </Link>
          <ul className='main-menu__list'>
            {navItems.map((navItem) => (
              <NavItems key={navItem.id} navItem={navItem} />
            ))}
          </ul>

          <div className='main-menu__right'>
            <div
              onClick={toggleSearch}
              style={{ cursor: "pointer" }}
              className='main-header__btn search-toggler'
            >
              <i className='paroti-icon-magnifying-glass'></i>
            </div>
            <Link to='/donations' className='main-header__btn'>
              <i className='paroti-icon-shopping-cart'></i>
            </Link>
            <div
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
              className='main-header__toggler mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link to='/donations-details' className='thm-btn thm-btn--two '>
              <span>Donate Now</span>
              <i>
                <FontAwesomeIcon
                  style={{ width: "14px" }}
                  icon={faHeart}
                ></FontAwesomeIcon>
              </i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
