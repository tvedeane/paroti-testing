import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const Events = () => {
  const { language } = useI18next();
  const eventTwoData = getData(language, "EventTwoData");
  return (
    <section className="sec-pad-top sec-pad-bottom">
      <Container>
        <Row className="gutter-y-30">
          {eventTwoData.carouselData.map((data) => (
            <Col key={data.id} md={12} lg={4}>
              <div className="events-card">
                <div className="events-card__image">
                  <Image
                    relativePath={data.image}
                    alt={data.title}
                    file="events"
                  />
                  <Image
                    relativePath={data.image}
                    className="events-card__image--hover"
                    alt={data.title}
                  />
                </div>

                <div className="events-card__content">
                  <div className="events-card__date">{data.date}</div>

                  <ul className="events-card__meta list-unstyled">
                    {data.lists.map((list) => (
                      <li key={list.id}>
                        <i>
                          <FontAwesomeIcon icon={list.icon} />
                        </i>
                        <a href="#">{list.cont}</a>
                      </li>
                    ))}
                  </ul>

                  <h3 className="events-card__title">
                    <Link to={data.link}>{data.title}</Link>
                  </h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;
