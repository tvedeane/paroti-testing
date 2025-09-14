import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonialOne from "./SingleTestimonialOne";
import loadable from "@loadable/component";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const TinySlider = loadable(() => import("tiny-slider-react"), {
  ssr: false,
});

const settings = {
  container: "#testimonials-one-carousel-1",
  loop: true,
  autoplay: false,
  rewind: true,
  items: 1,
  gutter: 0,
  mouseDrag: true,
  touch: true,
  nav: false,
  autoplayButtonOutput: false,
  controls: false,
};

const TestimonialOne = ({ page }) => {
  const { language } = useI18next();
  const testimonialOneData = getData(language, "TestimonialOneData");

  const {
    bg,
    testi1,
    testi2,
    testi3,
    testi4,
    testi5,
    tagLine,
    text,
    title,
    carouselData,
  } = testimonialOneData;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section
      className={`sec-pad-top testimonials-one ${
        page ? "sec-pad-bottom" : "testimonials-one--bottom-pd-lg"
      }`}
    >
      <div
        className="testimonials-one__bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="testimonials-one__gallery">
        <Image relativePath={testi1} className="float-bob-x" />
        <Image relativePath={testi2} className="float-bob-y" />
        <Image relativePath={testi3} className="float-bob-x" />
        <Image relativePath={testi4} className="float-bob-y" />
        <Image relativePath={testi5} className="float-bob-x" />
      </div>
      <Container>
        <Row className="gutter-y-60">
          <Col lg={5}>
            <div className="testimonials-one__content">
              <div className="sec-title">
                <p className="sec-title__tagline">{tagLine}</p>

                <h2 className="sec-title__title">
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>

              <p className="testimonials-one__text">
                {text.split("\n").map((t, i) => (
                  <Fragment key={i}>
                    {t} <br />
                  </Fragment>
                ))}
              </p>

              <a href="#" className="thm-btn testimonials-one__btn">
                <span>View all feedbacks</span>
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <Suspense fallback={<div>Loading...</div>}>
              <TinySlider
                className="thm-tns__carousel"
                id="testimonials-one-carousel-1"
                settings={settings}
              >
                {carouselData.map((carousel) => (
                  <SingleTestimonialOne key={carousel.id} carousel={carousel} />
                ))}
              </TinySlider>
            </Suspense>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
