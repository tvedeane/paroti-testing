
import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// font
import "@fontsource/manrope/latin.css";

// slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/assets/paroti-icons/stylesheet.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "tiny-slider/dist/tiny-slider.css";


// swiper css

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// vendor css
import "@/assets/vendors/animate/animate.min.css";
import "@/assets/vendors/fontawesome/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '@/assets/css/paroti.css'
import '@/assets/css/paroti-gatsby.css'
import HeaderTwo from "../HeaderTwo/HeaderTwo";
import useScroll from "@/hooks/useScroll";
import ScrollTop from "../ScrollTop/ScrollTop";
import Search from "../Search/Search";
import ThemeProvider from "@/Provider/ThemeProvider";

import MobileNav from "../MobileNav/MobileNav";

const Layout = ({ children, PageTitle }) => {
  const scrollTop = useScroll(130)

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fragment>
      <ThemeProvider>


        <Helmet>
          <title>
            {PageTitle ? PageTitle : ''} || Paroti || Non Profit Charity Gatsby Template",
          </title>
        </Helmet>
        <Preloader />
        <div className='page-wrapper'>
          {PageTitle === "Home Two" ? <HeaderTwo /> : PageTitle === "Home Three" ? <HeaderTwo /> : <Header />}


          {children}
          <Footer />
        </div>
        {
          scrollTop && <ScrollTop />
        }

        <MobileNav />
        <Search />
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
