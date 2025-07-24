"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SingleBlogHome from "./SingleBlogHome";
import blogData from "@/data/BlogData";
import loadable from '@loadable/component'
const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const BlogHomeThree = () => {
  const { tagLine, title, carouselData } = blogData;
  const [mounted, setMounted] = useState(false);
  const settings = {
    container: "#blog-carousel-1",
    loop: true,
    rewind: true,
    autoplay: true,
    items: 1,
    gutter: 0,
    mouseDrag: true,
    touch: true,
    nav: false,
    autoplayButtonOutput: false,
    controls: false,
    responsive: {
      0: {
        items: 1,
        gutter: 0,
      },
      576: {
        items: 1,
        gutter: 0,
      },
      768: {
        items: 2,
        gutter: 30,
      },
      992: {
        items: 2,
        gutter: 30,
      },
      1200: {
        items: 3,
        gutter: 30,
      },
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='sec-pad-top blog-home-3'>
      <Container>
        <div className='sec-title text-center'>
          <p className='sec-title__tagline'>{tagLine}</p>
          <h2 className='sec-title__title'>{title}</h2>
        </div>
        <div className='blog-carousel'>
          <TinySlider
            settings={settings}
            className='thm-tns__carousel'
            id='blog-carousel-1'
          >
            {carouselData.map((carousel, index) => (
              <SingleBlogHome
                key={carousel.id}
                carousel={carousel}
                index={index}
              />
            ))}
          </TinySlider>
        </div>
      </Container>
    </section>
  );
};

export default BlogHomeThree;
