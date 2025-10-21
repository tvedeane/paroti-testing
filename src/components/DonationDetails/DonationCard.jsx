import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby-plugin-react-i18next";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Progress from "../Progress/Progress";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const DonationCard = () => {
  const { language } = useI18next();
  const donationsDetails = getData(language, "DonationDetails");
  const {
    title,
    accentColor,
    amounts,
    category,
    count,
    image,
    presentation,
    bottom,
    content,
  } = donationsDetails;
  return (
    <div className="donations-details">
      <div className="donations-card" style={{ "--accent-color": accentColor }}>
        <div className="donations-card__image">
          <Image relativePath={image} />

          <div className="donations-card__category">
            <a href="#">{category}</a>
          </div>
        </div>
        <div className="donations-card__content">
          <Progress percent={count} />

          <div className="donations-card__amount">
            {amounts?.map((amount) => (
              <p key={amount.id}>
                <span>${amount.amount}</span> {amount.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
      <h3 className="donations-card__title">{title}</h3>
      <div className="donations-details__content">
        {content.texts.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <h3 className="donations-card__title">{content.title}</h3>
        <p>{content.text3}</p>
        <ul className="list-unstyled donations-details__list">
          {content.lists.map((list) => (
            <li key={list.id}>
              <i>
                <FontAwesomeIcon icon={list.icon} />
              </i>
              {list.text}
            </li>
          ))}
        </ul>
        <p>{content.text4}</p>
        <br />
        <Row>
          <Col md={6}>
            <Image relativePath={content.donation1} />
          </Col>
          <Col md={6}>
            <Image relativePath={content.donation2} />
          </Col>
        </Row>
      </div>
      <div className="donations-details__bottom">
        <Link to={bottom.btnLink} className="thm-btn donations-details__btn">
          <span>{bottom.btnText}</span>
        </Link>
        <div className="donations-details__social">
          {bottom.socials.map((social, i) => (
            <a key={i} href="#">
              <i>
                <FontAwesomeIcon icon={social} />
              </i>
            </a>
          ))}
        </div>
      </div>
      <div className="donations-details__presentation">
        <i className={presentation.icon}></i>
        <h3 className="donations-details__presentation__title">
          {presentation.title}
        </h3>

        <Link
          to={presentation.btnLink}
          className="thm-btn donations-details__presentation__btn"
        >
          <span>{presentation.btnText}</span>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
