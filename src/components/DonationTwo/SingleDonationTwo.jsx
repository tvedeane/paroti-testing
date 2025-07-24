import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";

const SingleDonationTwo = ({ carousel }) => {
  const { link, title, text, icon, linkIcon, accentColor } = carousel;
  return (
    <div className='item'>
      <div
        className='donation-card-two'
        style={{ "--accent-color": accentColor }}
      >
        <div className='donation-card-two__bg'></div>

        <h3 className='donation-card-two__title'>
          <Link to={link}>{title}</Link>
        </h3>

        <p className='donation-card-two__text'>{text}</p>

        <i className={icon}></i>
        <a href={link}>
          <i className='donation-card-two__link'>
            <FontAwesomeIcon icon={linkIcon} />
          </i>
        </a>
        <div className='donation-card-two__shape'></div>
      </div>
    </div>
  );
};

export default SingleDonationTwo;
