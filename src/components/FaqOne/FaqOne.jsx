import React, { Fragment } from "react";

import { Accordion, Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const FaqOne = () => {
  const { language } = useI18next();
  const faqOneData = getData(language, "FaqOneData");
  const { bg, title, text, tagLine, accordionData, image } = faqOneData;
  return (
    <section className="faq-one">
      <div
        className="faq-one__bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <Container>
        <Row className="gutter-y-60">
          <Col lg={6}>
            <div className="faq-one__content">
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

              <div className="faq-one__content__text">{text}</div>

              <Accordion className="faq-one__accordion" defaultActiveKey="0">
                {accordionData.map((accordion, index) => (
                  <Accordion.Item
                    className="faq-one__accordion__item"
                    key={accordion.id}
                    eventKey={index.toString()}
                  >
                    <Accordion.Header
                      id={`faq-one__accordion-1__heading-${accordion.id}`}
                    >
                      {accordion.header}
                      <span className="faq-one__accordion__icon"></span>
                    </Accordion.Header>
                    <Accordion.Body className="faq-one__accordion__body">
                      {" "}
                      {accordion.content}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>

          <Col lg={6}>
            <div className="faq-one__image">
              <Image relativePath={image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
