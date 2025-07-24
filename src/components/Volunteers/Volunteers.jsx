import React from "react";
import volunteersData from "@/data/VolunteersData";
import volunteersPageData from "@/data/VolunteersPageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";

const Volunteers = ({ page }) => {
  const data = page ? volunteersPageData : volunteersData;

  const { tagLine, title, volunteersDataCards } = data;
  return (
    <section className='sec-pad-top sec-pad-bottom'>
      <Container>
        {!page && (
          <div className='sec-title text-center'>
            <p className='sec-title__tagline'>{tagLine}</p>

            <h2 className='sec-title__title'>{title}</h2>
          </div>
        )}

        <Row className=' gutter-y-30'>
          {volunteersDataCards.map((card) => (
            <Col key={card.id} md={6} lg={4}>
              <div className='volunteers-card'>
                <h3 className='volunteers-card__title'>
                  <a href='#'>{card.title}</a>
                </h3>
                <p className='volunteers-card__designation'>
                  {card.designations}
                </p>
                <div className='volunteers-card__image'>
                  <Image relativePath={card.image} />

                </div>

                <div className='volunteers-card__social'>
                  {card.socials.map((social) => (
                    <a href='#' key={social.id}>
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Volunteers;
