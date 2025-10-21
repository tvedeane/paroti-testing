
import React, { Suspense } from "react";
import ctaS from "@/assets/images/shapes/cta-s-1-1.png";
import ctaBg from "@/assets/images/backgrounds/cta-bg-1-1.jpg";
import { Link } from "gatsby-plugin-react-i18next";
import JarallaxImage from "../Jarallax/JarallaxImage";
import loadable from '@loadable/component';
import { Container } from "react-bootstrap";
const Jarallax = loadable(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const CtaOne = ({ page }) => {

  return (
    <section className={`sec-pad-top ${page ? "cta-one--pad-bottom " : "sec-pad-bottom"} cta-one`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Jarallax className="cta-one__bg" speed={0} imgPosition="center cnter">
          <JarallaxImage src={ctaBg} />
        </Jarallax>
      </Suspense>


      <div
        className='cta-one__shape'
        style={{ backgroundImage: `url(${ctaS})` }}
      ></div>

      <Container className='text-center'>
        <div className='sec-title'>
          <p className='sec-title__tagline'>
            We’re here to support poor people
          </p>

          <h2 className='sec-title__title'>
            Fundraising for the people and <br />
            <span>causes</span> you care about
          </h2>
        </div>

        <Link to='/donations' className='thm-btn cta-one__btn'>
          <span>Start donating thAem</span>
        </Link>
      </Container>
    </section>
  );
};

export default CtaOne;
