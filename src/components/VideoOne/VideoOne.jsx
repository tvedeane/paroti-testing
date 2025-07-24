"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import videoOne from "@/data/VideoOne";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import VideoModal from "../VideoModal/VideoModal";
const { videoInner, videoId, videoOneLists } = videoOne;
const inputs = ["name", "phone", "email", "location", "message"];
const VideoOne = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [isMounted, setIsmounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <section className='sec-pad-top sec-pad-bottom video-one'>
        <Container>
          <div
            className='video-one__inner'
            style={{ backgroundImage: `url(${videoInner})` }}
          >
            <Row className='gutter-y-60'>
              <Col md={12} lg={6}>
                <div className='video-one__content'>
                  <span style={{ cursor: "pointer" }}
                    className='video-one__btn video-popup'
                    onClick={() => setOpen(true)}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                    <span className='video-one__btn__arrow'></span>
                  </span>
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    <h3 className='video-one__title count-box'>
                      Help us to donate <br />$
                      {counterOn && (
                        <CountUp
                          className='count-text'
                          end={3800}
                          duration={1.5}
                        />
                      )}{" "}
                      to poor children
                    </h3>
                  </ScrollTrigger>
                  <ul className='list-unstyled video-one__list'>
                    {videoOneLists.map((videoOneList) => (
                      <li key={videoOneList.id}>
                        <FontAwesomeIcon icon={videoOneList.icon} />

                        {videoOneList.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col md={12} lg={6}>
                <form
                  onSubmit={handleSubmit}
                  suppressHydrationWarning={true}
                  action='#'
                  className='contact-one__form video-one__form contact-form-validated'
                >
                  <Row>
                    <Col md={6}>
                      <input type='text' placeholder='Your name' name='name' />
                    </Col>
                    <Col md={6}>
                      <input
                        type='text'
                        placeholder='Your phone'
                        name='phone'
                      />
                    </Col>
                    <Col md={12}>
                      <input
                        type='text'
                        placeholder='Email address'
                        name='email'
                      />
                    </Col>
                    <Col md={12}>
                      <input
                        type='text'
                        placeholder='Location'
                        name='location'
                      />
                    </Col>
                    <Col md={12}>
                      <textarea name='message' placeholder='Message'></textarea>
                    </Col>
                    <Col md={12}>
                      <button
                        type='submit'
                        className='thm-btn contact-one__btn'
                      >
                        <span>Continue now</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;
