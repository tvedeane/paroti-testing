import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby";
import React from "react";
import Image from "../Image/Image";

const SingleBlogHome = ({ carousel, index }) => {
  const { image, date, lists, title, link, linkIcon, linkText } = carousel;
  return (
    <div className='item' id={`blog-carousel-1-item${index}`}>
      <div className='blog-card'>
        <div className='blog-card__image'>
          <Image relativePath={image} alt='' />

          <div className='blog-card__date'>
            <span>{date.day}</span>
            {date.month}
          </div>
        </div>

        <div className='blog-card__content'>
          <ul className='blog-card__meta list-unstyled'>
            {lists.map((list) => (
              <li key={list.id}>
                <i>
                  <FontAwesomeIcon icon={list.icon} />
                </i>
                <a href='#'>{list.cont}</a>
              </li>
            ))}
          </ul>

          <h3 className='blog-card__title'>
            <Link to={link}>{title}</Link>
          </h3>

          <Link to={link} className='blog-card__links'>
            <i>
              <FontAwesomeIcon icon={linkIcon} />
            </i>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHome;
