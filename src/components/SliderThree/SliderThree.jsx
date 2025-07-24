
import React, { Fragment, useEffect, useState } from "react";

import sliderThreeData from "@/data/SliderThreeData";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import loadable from '@loadable/component';
// Lazy load the TinySlider component
const TinySlider = loadable(() => import("tiny-slider-react"));
const SliderThree = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    lazyload: true,
    mode: "gallery",

    // autoplayDirection: "backward",
    slideBy: "page",
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoHeight: true,
    animateIn: "fadeIn",
    animateOut: "slideOutDown",
    animateDelay: 2000,
    controls: true,
    controlsContainer: ".slider-three .tns-controls",
    // container: "#verticle",
    // axis: "verticle",
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
    onInit: (current) => setCurrentSlide(current),
    onIndexChanged: (current) => setCurrentSlide(current),
  };
  return (
    <section className='slider-one slider-three position-relative overflow-hidden'>
      <div className='tns-controls'>
        <button className='tns-prev'>
          <span className='paroti-icon-left-arrow'></span>
        </button>
        <button className='tns-next'>
          <span className='paroti-icon-right-arrow'></span>
        </button>
      </div>

      <TinySlider settings={settings}>
        {sliderThreeData.map((data, index) => (
          <div key={data.id} className='item'>
            <div className='slider-one__item'>
              <div
                className='slider-one__image'
                style={{ backgroundImage: `url(${data.bg && data.bg})` }}
              ></div>

              <Container>
                <p className='slider-one__text'>{data.text}</p>

                <h2 className='slider-one__title'>
                  {data.title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>

                <div className='slider-one__btns'>
                  <Link to='/about' className='thm-btn slider-one__btn'>
                    <span>Discover More</span>{" "}
                  </Link>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </TinySlider>
    </section>
  );
};

export default SliderThree;
