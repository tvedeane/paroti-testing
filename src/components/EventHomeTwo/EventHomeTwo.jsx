import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "gatsby";
import loadable from "@loadable/component";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

// Lazy load the TinySlider component
const TinySlider = loadable(() => import("tiny-slider-react"));

const EventHomeTwo = () => {
  const { language } = useI18next();
  const eventTwoData = getData(language, "EventTwoData");
  const { tagLine, title, carouselData } = eventTwoData;
  const [mounted, setMounted] = useState(false);

  const settings = {
    items: 1,
    lazyload: true,
    loop: true,
    rewind: true,

    autoplay: true,
    autoplayTimeout: 6000,
    mouseDrag: true,
    nav: false,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <section className="event-home-two sec-pad-top sec-pad-bottom">
      <Container>
        <Row className="gutter-y-60">
          <Col xl={3}>
            <div className="event-home-two__content">
              <div className="sec-title text-start">
                <p className="sec-title__tagline">{tagLine}</p>

                <h2 className="sec-title__title">
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>

              <div className="event-home-two__content__text">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered.
              </div>

              <div className="event-home-two__btns">
                <Link to="/contact" className="thm-btn event-home-two__btn">
                  <span>Register your seat</span>{" "}
                </Link>
              </div>
            </div>
          </Col>

          <Col xl={9}>
            <div className="event-home-two__carousel">
              <TinySlider settings={settings}>
                {carouselData.map((carousel) => (
                  <div key={carousel.id} className="item">
                    <div className="events-card">
                      <div className="events-card__image">
                        <Image relativePath={carousel.image} alt="" />
                        <Image
                          relativePath={carousel.image}
                          className="events-card__image--hover"
                          alt=""
                        />
                      </div>

                      <div className="events-card__content">
                        <div className="events-card__date">{carousel.date}</div>

                        <ul className="events-card__meta list-unstyled">
                          {carousel.lists.map((list) => (
                            <li key={list.id}>
                              <i>
                                <FontAwesomeIcon icon={list.icon} />
                              </i>
                              <a href="#">{list.cont}</a>
                            </li>
                          ))}
                        </ul>

                        <h3 className="events-card__title">
                          <Link to={carousel.link}>{carousel.title}</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventHomeTwo;
