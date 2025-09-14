import React, { Suspense, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SingleCarousel from "./SingleCarousel";
import loadable from "@loadable/component";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});
const DonationCarousel = () => {
  const { language } = useI18next();
  const donationCarouserData = getData(language, "DonationCarouselData");
  const [mounted, setMounted] = useState(false);
  const { tagLine, title, carouselData } = donationCarouserData;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    container: "#donations-carousel-1",
    loop: true,
    autoplay: true,
    rewind: true,
    items: 1,
    gutter: 0,
    mouseDrag: true,
    touch: true,
    nav: true,
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

  return (
    <section className="sec-pad-top sec-pad-bottom">
      <Container>
        <div className="sec-title">
          <p className="sec-title__tagline">{tagLine}</p>

          <h2 className="sec-title__title">{title}</h2>
        </div>
        <div className="donations-carousel">
          <TinySlider
            className="thm-tns__carousel"
            id="donations-carousel-1"
            settings={settings}
          >
            {carouselData.map((carousel, index) => (
              <SingleCarousel
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

export default DonationCarousel;
