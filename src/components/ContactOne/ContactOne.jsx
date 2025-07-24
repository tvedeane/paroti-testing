import React from "react";

import contactPage from "@/data/ContactPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Container, Row } from "react-bootstrap";
const { tagline, title, socials, text } = contactPage;

const inputs = ["name", "email", "message"];
const ContactOne = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };
  return (
    <section className='sec-pad-top sec-pad-bottom contact-one'>
      <Container>
        <Row className='gutter-y-60'>
          <Col lg={4}>
            <div className='sec-title'>
              <p className='sec-title__tagline'>{tagline}</p>
              <h2 className='sec-title__title'>{title}</h2>
            </div>
            <p className='contact-one__text'>{text}</p>
            <div className='contact-one__social'>
              {socials.map((social) => (
                <a key={social.id} href={social.href}>
                  <i>
                    <FontAwesomeIcon icon={social.icon} />
                  </i>
                </a>
              ))}
            </div>
          </Col>
          <Col lg={8}>
            <form
              action='#'
              onSubmit={handleSubmit}
              className='contact-one__form contact-form-validated'
            >
              <Row>
                <Col md={6}>
                  <input type='text' placeholder='Your name' name='name' />
                </Col>
                <Col md={6}>
                  <input type='text' placeholder='Email address' name='email' />
                </Col>
                <Col md={12}>
                  <textarea
                    name='message'
                    placeholder='Write a message'
                  ></textarea>
                </Col>
                <Col ms={12}>
                  <button type='submit' className='thm-btn contact-one__btn'>
                    <span>Send message</span>
                  </button>
                </Col>
              </Row>
            </form>
            <div className='result'></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactOne;
