import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby-plugin-react-i18next";
import Image from "../Image/Image";

const SingleBlog = ({ carousel }) => {
  const { image, date, lists, title, link, linkIcon, linkText } = carousel;


  return (
    <div className="item">
      <div className="blog-card">
        <div className="blog-card__image">
          {
            image && <Image relativePath={image} alt="" />
          }



          <div className="blog-card__date">
            <span>{date.day}</span>
            {date.month}
          </div>
        </div>

        <div className="blog-card__content">
          <ul className="blog-card__meta list-unstyled">
            {lists.map((list) => (
              <li key={list.id}>
                <i>
                  <FontAwesomeIcon icon={list.icon} />
                </i>
                <a href="#">{list.cont}</a>
              </li>
            ))}
          </ul>

          <h3 className="blog-card__title">
            <Link to={link}>{title}</Link>
          </h3>

          <Link to={link} className="blog-card__links">
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

export default SingleBlog;
