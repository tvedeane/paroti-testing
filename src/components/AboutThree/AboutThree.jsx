import React, { Fragment } from "react";
import aboutThreedata from "@/data/AboutThreeData";

import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";

const AboutThree = () => {
  const { image, lists, tagLine, text, title } = aboutThreedata;
  return (
    <section className='about-three'>
      <div
        className='about-three__shape'
        data-aos='slide-right'
        data-aos-easing='linear'
        data-aos-duration='1500'
      ></div>

      <Container>
        <Row className='gutter-y-60'>
          <Col md={12} lg={5}>
            <div className='about-three__content'>
              <div className='sec-title'>
                <p className='sec-title__tagline'>{tagLine}</p>
                <h2 className='sec-title__title'>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
              </div>
              <div className='about-three__text'>{text}</div>
              <ul className='about-three__list list-unstyled'>
                {lists.map((list) => (
                  <li
                    key={list.id}
                    className='about-three__list__item'
                    style={{ "--accent-color": list.accentColor }}
                  >
                    <div className='about-three__list__icon'>
                      <i className={list.icon}></i>
                    </div>
                    <h3 className='about-three__list__title'>{list.title}</h3>

                    <p className='about-three__list__text'>{list.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={12} lg={7}>
            <div className='about-three__image'>
              <Image relativePath={image} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutThree;
