import React from "react";
import bg from "@/assets/images/shapes/cta-3-bg-1-1.png";
import { Container } from "react-bootstrap";
import { Link } from "gatsby-plugin-react-i18next";

const CtaThree = () => {
  return (
    <section className='cta-three'>
      <Container>
        <div
          className='cta-three__inner '
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1500'
          data-aos-delay='0ms'
        >
          <div
            className='cta-three__inner__bg'
            style={{ backgroundImage: `url(${bg})` }}
          ></div>

          <div className='cta-three__icon'>
            <i className='paroti-icon-support'></i>
          </div>

          <h3 className='cta-three__title'>
            Let’s make a difference in the lives of others
          </h3>

          <div className='cta-three__btns'>
            <Link
              to='/donations-details'
              className='thm-btn cta-three__btn'
            >
              <span>Start donating</span>{" "}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaThree;
