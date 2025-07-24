"use client";

import React, { useEffect, useState } from "react";
import loadable from '@loadable/component';
import bg from "@/assets/images/shapes/slider-two-bg-1-1.png";
import sliderTwoData from "@/data/SliderTwoData";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
const TinySlider = loadable(() => import("tiny-slider-react"));

const SliderTwo = () => {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
    controlsContainer: ".slider-two .tns-controls",
    container: "#verticle",
    axis: "verticle",
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,

  };
  return (
    <section
      className='slider-one slider-two '
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='position-relative overflow-hidden'>
        <div className='tns-controls'>
          <button className='tns-prev'>
            <span className='paroti-icon-left-arrow'></span>
          </button>
          <button className='tns-next'>
            <span className='paroti-icon-right-arrow'></span>
          </button>
        </div>

        <TinySlider settings={settings}>
          {sliderTwoData.map((data, index) => (
            <div key={data.id} className='item'>
              <div className='slider-one__item'>
                <div
                  className='slider-one__image'
                  style={{ backgroundImage: `url(${data.bg && data.bg})` }}
                ></div>

                <Container>
                  <p className='slider-one__text'>{data.text}</p>

                  <h2 className='slider-one__title'>{data.title}</h2>

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
      </div>
    </section>
  );
};

export default SliderTwo;
