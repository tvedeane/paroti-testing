
import React, { Fragment, useState } from "react";
import aboutFourData from "@/data/AboutFourData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";
import Image from "../Image/Image";

const AboutFour = () => {
  const [isOpen, setOpen] = useState(false);
  const {
    aboutShape,
    tagLine,
    title,
    aboutImage,
    icon,

    text,
    lists,
    videoId,
  } = aboutFourData;
  return (
    <section className='sec-pad-top sec-pad-bottom about-four'>
      <Image relativePath={aboutShape} className='float-bob-x about-four__shape' />
      <Container>
        <div className='sec-title text-center'>
          <p className='sec-title__tagline'>{tagLine}</p>
          <h2 className='sec-title__title'>
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </h2>
        </div>

        <Row className='gutter-y-60'>
          <Col md={12} lg={6}>
            <div
              className='about-four__image'
              data-aos='fade-right'
              data-aos-easing='linear'
              data-aos-duration='1500'
            >
              <Image relativePath={aboutImage} />
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
                className='video-popup about-four__video'
              >
                <i>
                  <FontAwesomeIcon icon={icon} />
                </i>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className='about-four__content'>
              <div className='about-four__content__text'>{text}</div>

              <ul className='list-unstyled about-four__list'>
                {lists.map((list) => (
                  <li key={list.id} className='about-four__list__item'>
                    <i>
                      <FontAwesomeIcon icon={list.icon} />
                    </i>
                    <h3 className='about-four__list__title'>{list.title}</h3>

                    <p className='about-four__list__text'>{list.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </section>
  );
};

export default AboutFour;
