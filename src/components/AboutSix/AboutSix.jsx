import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby-plugin-react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const AboutSix = () => {
  const { language } = useI18next();
  const aboutSixData = getData(language, "AboutSixData");
  const { bg, bg2, image1, image2, tagLine, text, title, lists } = aboutSixData;
  return (
    <section className="about-six about-six--pad-top about-six--pad-bottom">
      <div
        className="about-six__bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div
        className="about-six__shape float-bob-x"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <Container>
        <Row className="gutter-y-60">
          <Col lg={6}>
            <div className="about-six__images">
              <Image relativePath={image1} />
              <Image relativePath={image2} />
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-six__content">
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

              <div className="about-six__content__text">{text}</div>

              <ul className="list-unstyled about-six__list">
                {lists.map((list) => (
                  <li key={list.id} className="about-six__list__item">
                    <FontAwesomeIcon
                      className="about-six__list__icon"
                      icon={list.icon}
                    />

                    <h3 className="about-six__list__title">{list.title}</h3>

                    <p className="about-six__list__text">{list.text}</p>
                  </li>
                ))}
              </ul>

              <div className="about-six__btns">
                <Link to="/about" className="thm-btn about-six__btn">
                  <span>Discover More</span>{" "}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSix;
