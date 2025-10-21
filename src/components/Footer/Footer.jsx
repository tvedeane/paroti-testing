import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby-plugin-react-i18next";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const Footer = () => {
  const { language } = useI18next();
  const footerData = getData(language, "FooterData");
  const { footerBg, logo, about, links, nonProfit, contacts, icons } =
    footerData;
  return (
    <footer
      className="site-footer"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="site-footer__top">
        <Container>
          <Row>
            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={3}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="000"
            >
              <div className="site-footer__widget site-footer__widget__about">
                <Link to="/" className="site-footer__widget__logo">
                  <Image relativePath={logo} alt="" width={127} height={49} />
                </Link>
                <p className="site-footer__widget__text">{about}</p>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={2}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <div className="site-footer__widget">
                <h3 className="site-footer__widget__title">Links</h3>

                <ul className="list-unstyled site-footer__widget__links">
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={2}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <div className="site-footer__widget">
                <h3 className="site-footer__widget__title">Non Profit</h3>

                <ul className="list-unstyled site-footer__widget__links">
                  {nonProfit.map((profit) => (
                    <li key={profit.id}>
                      <Link to={profit.link}>{profit.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={3}
              className="col-sm-12 col-md-6 col-lg-6 col-xl-3"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="site-footer__widget">
                <h3 className="site-footer__widget__title">Contact</h3>

                <ul className="list-unstyled site-footer__widget__contact">
                  {contacts.map((contact) => (
                    <li key={contact.id}>
                      <i>
                        <FontAwesomeIcon icon={contact.icon} />
                      </i>
                      <a href={`${contact.subHref}:${contact.title}`}>
                        {contact.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col
              sm={12}
              ms={6}
              lg={6}
              xl={2}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <div className="site-footer__widget site-footer__widget__cta">
                <h3 className="site-footer__widget__title">
                  <span>Raise Money and help them</span>
                </h3>

                <Link
                  to="/donations-details"
                  className="thm-btn thm-btn--two thm-btn--light"
                >
                  <span>Donate Now</span>
                  <i>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="site-footer__bottom">
        <Container>
          <div className="site-footer__bottom__inner">
            <p className="site-footer__bottom__text">
              © Copyright <span className="dynamic-year"></span> by
              Layerdrops.com
            </p>

            <div className="site-footer__social">
              {icons.map((icon) => (
                <a href={icon.href} key={icon.id}>
                  <FontAwesomeIcon icon={icon.icon}></FontAwesomeIcon>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
