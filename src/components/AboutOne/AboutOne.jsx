import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const AboutOne = () => {
  const { language } = useI18next();
  const aboutOneData = getData(language, "AboutOne");
  const {
    aboutOne,
    aboutTwo,
    aboutTagline,
    desig,
    items,
    metaImage,
    name,
    shape1,
    shape2,
    tagLine,
    text,
    title,
  } = aboutOneData;
  return (
    <section className="sec-pad-top sec-pad-bottom about-one">
      <div className="about-one__shape-1 float-bob-y">
        {/* <img src={shape1} alt='' /> */}
        <Image relativePath={shape1} />
      </div>
      <div className="about-one__shape-2 float-bob-x">
        <Image relativePath={shape2} />
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div
              className="about-one__images "
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image
                relativePath={aboutOne}
                className="about-one__images-one"
              />
              <Image
                relativePath={aboutTwo}
                className="about-one__images-two"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-one__content">
              <div className="sec-title">
                <p className="sec-title__tagline">{tagLine}</p>
                <h2 className="sec-title__title">{title}</h2>
              </div>
              <ul className="list-unstyled about-one__list">
                {items.map((item) => (
                  <li key={item.id}>
                    <i>
                      <FontAwesomeIcon icon={item.itemIcon} />
                    </i>
                    {item.itemTitle}
                  </li>
                ))}
              </ul>
              <div className="about-one__tagline">{aboutTagline}</div>
              <p className="about-one__text">{text}</p>
              <div className="about-one__meta clearfix">
                <Image relativePath={metaImage} />

                <h3 className="about-one__name">{name}</h3>

                <p className="about-one__designation">{desig}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
