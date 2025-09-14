"use client";
import React, { useState, useEffect, Fragment } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { Container } from "react-bootstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const FunFactTwo = () => {
  const { language } = useI18next();
  const funFactTwoData = getData(language, "FunFactTwoData");
  const { FunFactBg, tagLine, title, funFactTwoLists } = funFactTwoData;
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    setCounterOn(true);
  }, []);

  return (
    <section
      className="funfact-two sec-pad-top sec-pad-bottom"
      style={{ backgroundImage: `url(${FunFactBg})` }}
    >
      <div className="funfact-two__shape"></div>
      <Container>
        <div className="sec-title text-center">
          <p className="sec-title__tagline">{tagLine}</p>
          <h2 className="sec-title__title">
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </h2>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <ul className="list-unstyled funfact-two__list">
            {funFactTwoLists.map((funFactTwoList) => (
              <li
                key={funFactTwoList.id}
                className="funfact-two__list__item"
                style={{ "--accent-color": funFactTwoList.color }}
              >
                <div className="funfact-two__list__icon">
                  <i className={funFactTwoList.icon}></i>
                </div>
                <h3 className="funfact-two__list__count count-box">
                  {counterOn && (
                    <CountUp
                      className="count-text"
                      end={funFactTwoList.count}
                      duration={1.5}
                    />
                  )}
                </h3>
                <p className="funfact-two__list__text">{funFactTwoList.text}</p>
              </li>
            ))}
          </ul>
        </ScrollTrigger>
      </Container>
    </section>
  );
};

export default FunFactTwo;
