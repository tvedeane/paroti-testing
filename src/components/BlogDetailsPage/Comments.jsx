import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import Image from "../Image/Image";

const Comments = ({ comments = [] }) => {
  return (
    <div className='blog-details__comments'>
      <h3 className='blog-details__sec__title'>{comments.length} Comments</h3>
      <ul className='list-unstyled blog-details__comments__list'>
        {comments.map(({ id, image, name, message, date }) => (
          <li key={id}>
            <Image relativePath={image} />

            <div className='blog-details__comments__meta'>
              <h3 className='blog-details__comments__name'>{name}</h3>

              <p className='blog-details__comments__date'>{date}</p>
            </div>
            <p className='blog-details__comments__text'>{message}</p>

            <a href='#' className='thm-btn blog-details__comments__btn'>
              <span>Reply</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
