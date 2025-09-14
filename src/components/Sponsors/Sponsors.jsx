import React, { Suspense, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import loadable from "@loadable/component";
import bg from "@/assets/images/shapes/sponsor-bg-1-1.png";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const settings = {
  container: "#sponsor-carousel-1",
  loop: true,
  autoplay: true,
  rewind: true,
  items: 2,
  gutter: 30,
  mouseDrag: true,
  touch: true,
  nav: false,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    0: {
      items: 2,
      gutter: 30,
    },
    576: {
      items: 3,
      gutter: 30,
    },
    768: {
      items: 4,
      gutter: 30,
    },
    992: {
      items: 5,
      gutter: 50,
    },
    1200: {
      items: 5,
      gutter: 140,
    },
  },
};

const Sponsors = ({ title }) => {
  const { language } = useI18next();
  const sponsorData = getData(language, "SponsorsData");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section
      className={`sec-pad-top sec-pad-bottom sponsor-carousel ${
        title === "homeTwo"
          ? "sponsor-carousel--home-2"
          : title === "homeThree"
          ? "sponsor-carousel--home-3"
          : ""
      }`}
      style={title === "homeThree" ? { backgroundImage: `url(${bg})` } : {}}
    >
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <TinySlider
            className="thm-tns__carousel"
            id="sponsor-carousel-1"
            settings={settings}
          >
            {sponsorData.map((sponsor) => (
              <div key={sponsor.id} className="item">
                <Image relativePath={sponsor.image} />
              </div>
            ))}
          </TinySlider>
        </Suspense>
      </Container>
    </section>
  );
};

export default Sponsors;
