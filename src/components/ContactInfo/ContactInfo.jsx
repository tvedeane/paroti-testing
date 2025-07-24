import information from "@/data/information";
import {
  faEnvelopeOpen,
  faMap,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
const { bg, address, phones, mails } = information;
const ContactInfo = () => {
  return (
    <section className='contact-info'>
      <Container>
        <div
          className='contact-info__inner'
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1500'
          style={{ backgroundImage: `url(${bg})` }}
        >
          <Row className='gutter-y-30'>
            <Col md={12} lg={4}>
              <div className='contact-info__item'>
                <div className='contact-info__icon'>
                  <i>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                  </i>
                </div>
                <p className='contact-info__text'>
                  {mails.map((mail, index) => (
                    <Fragment key={index}>
                      <a
                        href={`mailto:${mail}`}
                        className={`information__mail-${index + 1}`}
                      >
                        {mail}
                      </a>
                      <br />
                    </Fragment>
                  ))}
                </p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='contact-info__item'>
                <div className='contact-info__icon'>
                  <i>
                    <FontAwesomeIcon icon={faMap} />
                  </i>
                </div>
                <p className='contact-info__text'>
                  {address.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      <span>{t}</span> <br />
                    </Fragment>
                  ))}
                </p>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='contact-info__item'>
                <div className='contact-info__icon'>
                  <i>
                    <FontAwesomeIcon icon={faMobile} />
                  </i>
                </div>
                <p className='contact-info__text'>
                  {phones.map((phone, index) => (
                    <Fragment key={index}>
                      <a
                        href={`tel:${phone}`}
                        className={`information__number-${index + 1}`}
                      >
                        {phone}
                      </a>
                      <br />
                    </Fragment>
                  ))}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;
