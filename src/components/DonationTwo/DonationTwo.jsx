"use client";
import donationTwoData from "@/data/DonationTwo";
import React, { Suspense, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleDonationTwo from "./SingleDonationTwo";
import loadable from '@loadable/component';
const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const settings = {
  items: 1,
  gutter: 0,
  loop: false,
  rewind: true,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  touch: false,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
      gutter: 30,
    },
  },
};
const DonationTwo = () => {
  const { tagLine, text, title, carouselData } = donationTwoData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className='sec-pad-top sec-pad-bottom donation-two'>
      <Container>
        <Row className='gutter-y-60'>
          <Col md={12} lg={4}>
            <div className='sec-title'>
              <p className='sec-title__tagline'>{tagLine}</p>

              <h2 className='sec-title__title'>{title}</h2>
            </div>

            <p className='donation-two__text'>{text}</p>
          </Col>
          <Col md={12} lg={6}>
            <div className='donation-two__carousel'>
              <Suspense fallback={<div>Loading...</div>}>
                <TinySlider settings={settings}>
                  {carouselData.map((carousel) => (
                    <SingleDonationTwo key={carousel.id} carousel={carousel} />
                  ))}
                </TinySlider>
              </Suspense>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationTwo;
