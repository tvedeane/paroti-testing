
import React, { useState, useEffect, Fragment } from "react";
import funFactOneData from "@/data/FunFactOneData";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const FunFactOne = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    setCounterOn(true);
  }, []);
  return (
    <section className='funfact-one funfact-one--m-margin-top'>
      <Container>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className='funfact-one__inner ' data-aos='fade-up'>
            {funFactOneData.map((data) => (
              <div key={data.id} className='funfact-one__item'>
                <h3 className='count-box funfact-one__title'>
                  {counterOn && (
                    <CountUp
                      className='count-text'
                      end={data.count}
                      duration={1.5}
                    />
                  )}
                </h3>

                <p className='funfact-one__text'>{data.text}</p>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </Container>
    </section>
  );
};

export default FunFactOne;
