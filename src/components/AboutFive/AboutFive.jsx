import { Link } from "gatsby";

import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const AboutFive = () => {
  const { language } = useI18next();
  const aboutFiveData = getData(language, "AboutFive");
  const {
    tagLine,
    title,
    subTitle,
    person,
    personDesignation,
    personName,
    blockquote_icon,
    blockquote,
    items,
  } = aboutFiveData;

  return (
    <section className="sec-pad-top sec-pad-bottom about-five">
      <Container>
        <Row className=" gutter-y-60">
          <Col md={12} lg={6}>
            <div className="about-five__content">
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

              <div className="about-five__text">{subTitle}</div>
              <blockquote className="about-five__blockquote">
                <i className={blockquote_icon}></i>
                {blockquote}
              </blockquote>
              <div className="about-five__person">
                <div className="about-five__person__image">
                  <Image relativePath={person} alt="" />
                </div>

                <div className="about-five__person__content">
                  <h3 className="about-five__person__title">{personName}</h3>

                  <p className="about-five__person__designation">
                    {personDesignation}
                  </p>
                </div>
              </div>

              <div className="about-five__content__arrow float-bob-x"></div>
            </div>
          </Col>

          <Col md={12} lg={6}>
            <Row className=" gutter-y-30">
              {items.map((item) => (
                <Col
                  key={item.id}
                  sm={12}
                  md={6}
                  className="animated"
                  data-aos="fade-upt"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-delay="000ms"
                >
                  <div
                    className="about-five__item"
                    style={{ "--accent-color": item.color }}
                  >
                    <div className="about-five__item__icon">
                      <i className={item.itemIcon}></i>
                    </div>

                    <h3 className="about-five__item__title">
                      <Link to={item.href}>{item.itemTitle}</Link>
                    </h3>

                    <p className="about-five__item__tagline">
                      {item.itemTagLine}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFive;
