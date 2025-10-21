import React, { useEffect, useState, Suspense } from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby-plugin-react-i18next";
import loadable from "@loadable/component";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

// Lazy load the TinySlider component
const TinySlider = loadable(() => import("tiny-slider-react"));

const SliderOne = () => {
  const { language } = useI18next();
  const mainSliderData = getData(language, "MainSliderData");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const settings = {
    lazyload: true,
    mode: "gallery",
    animateIn: "fadeIn",
    animateOut: "slideOutDown",
    animateDelay: 5000,
    autoplayDirection: "backward",
    slideBy: "page",
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoHeight: true,
    controls: true,
    controlsContainer: ".slider-one .tns-controls",
    container: "#verticle",
    axis: "verticle",
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
  };

  return (
    <section className="slider-one position-relative overflow-hidden">
      <div className="tns-controls">
        <button className="tns-prev">
          <span className="paroti-icon-left-arrow"></span>
        </button>
        <button className="tns-next">
          <span className="paroti-icon-right-arrow"></span>
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <TinySlider settings={settings}>
          {mainSliderData.map(({ id, title, text, bg }) => (
            <div key={id} className="item">
              <div className="slider-one__item">
                <div
                  className="slider-one__image"
                  style={{
                    backgroundImage: `url(${bg})`,
                  }}
                ></div>
                <Container>
                  <h2
                    className="slider-one__title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h2>
                  <p className="slider-one__text">{text}</p>
                  <div className="slider-one__btns">
                    <Link to="/about" className="thm-btn slider-one__btn">
                      <span>Discover More</span>
                    </Link>
                  </div>
                </Container>
              </div>
            </div>
          ))}
        </TinySlider>
      </Suspense>
    </section>
  );
};

export default SliderOne;
