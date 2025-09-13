import React from "react";

import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

import Image from "../Image/Image";

const EventDetailsPage = ({
  image,
  date,
  text3,
  texts,
  title,
  titleTwo,
  location,
}) => {
  return (
    <section className="sec-pad-top sec-pad-bottom events-details">
      <Container>
        <div className="events-details__image">
          <Image relativePath={`events/${image}`} alt="" />

          <div className="events-card__date">{date}</div>
        </div>
        <Row className="gutter-y-60">
          <Col lg={8}>
            <div className="events-details__content">
              <h3 className="events-card__title">{title}</h3>
              {texts.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              <h4>{titleTwo}</h4>
              <p>{text3}</p>
              <Link to="/contact" className="thm-btn events-details__btn">
                <span>Register your seat</span>
              </Link>
            </div>
          </Col>
          <Col lg={4}>
            <Sidebar date={date} location={location} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventDetailsPage;
