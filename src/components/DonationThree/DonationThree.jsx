import React from "react";

import { Link } from "gatsby-plugin-react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const DonationThree = () => {
  const { language } = useI18next();
  const donationThreeData = getData(language, "DonationThree");
  const { cardData, ctaTwo } = donationThreeData;
  return (
    <section className="sec-pad-top">
      <Container>
        <Row className="gutter-y-30">
          {cardData.map((card) => (
            <Col
              key={card.id}
              md={12}
              lg={12}
              xl={4}
              className=""
              data-aos-delay="200ms"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div
                className="donation-card-three"
                style={{ "--accent-color": card.accentColor }}
              >
                <div className="donation-card-three__image">
                  <Image relativePath={card.image} alt="" />
                </div>
                <div className="donation-card-three__content">
                  <div className="donation-card-three__icon">
                    <i className={card.icon}></i>
                  </div>
                  <h3 className="donation-card-three__title">
                    <Link to={card.link}>{card.title}</Link>
                  </h3>
                  <p className="donation-card-three__text">{card.text}</p>
                </div>
              </div>
            </Col>
          ))}

          <Col
            md={12}
            lg={12}
            xl={4}
            className=""
            data-aos-delay="200ms"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div
              className="cta-two"
              style={{ backgroundImage: `url(${ctaTwo.bg.src})` }}
            >
              <i className="paroti-icon-support cta-two__icon"></i>
              <h3 className="cta-two__title">{ctaTwo.title}</h3>
              <Link to={ctaTwo.link} className="thm-btn cta-two__btn">
                <span>{ctaTwo.btnText}</span>
              </Link>
              <span className={ctaTwo.btnIcon}></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationThree;
