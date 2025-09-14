import React from "react";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const CtaFour = () => {
  const { language } = useI18next();
  const ctaFourData = getData(language, "CtaFourData");
  return (
    <section className="cta-four">
      <Container fluid>
        <Row>
          {ctaFourData.map((ctaData) => (
            <Col key={ctaData.id} lg={4}>
              <div
                className="cta-four__item"
                style={{ "--accent-color": ctaData.accentColor }}
              >
                <div
                  className="cta-four__item__bg"
                  style={{ backgroundImage: `url(${ctaData.bg})` }}
                ></div>

                <div className="cta-four__item__icon">
                  <i className={ctaData.icon}></i>
                </div>

                <h3 className="cta-four__item__title">
                  <Link to="/contact">{ctaData.title}</Link>
                </h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CtaFour;
