import React, { Fragment } from "react";
import { faComments, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby-plugin-react-i18next";
import Author from "./Author";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const BlogDetailsContent = () => {
  const { language } = useI18next();
  const blogDetailsPage = getData(language, "BlogDetailsPage");
  const {
    image,
    date,
    author,
    totalComments,
    title,
    texts,
    tags,
    socials,
    authorData,
    comments,
  } = blogDetailsPage;
  return (
    <>
      <div className="blog-details__content clearfix">
        <div className="blog-details__image">
          <Image relativePath={image} />

          <div className="blog-card__date">
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
              </Fragment>
            ))}
          </div>
        </div>
        <ul className="blog-card__meta list-unstyled">
          <li>
            <i>
              <FontAwesomeIcon icon={faUser} />
            </i>
            <a href="#">by {author}</a>
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faComments} />
            </i>
            <a to="#">{totalComments} comments</a>
          </li>
        </ul>
        <h3 className="blog-card__title">{title}</h3>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="blog-details__bottom">
        <p className="blog-details__tags">
          <span>Tags</span>
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </p>
        <div className="blog-details__social">
          {socials.map(({ id, icon, href }) => (
            <a href={href} key={id}>
              <i>
                <FontAwesomeIcon icon={icon} />
              </i>
            </a>
          ))}
        </div>
      </div>
      <Author author={authorData} />
      <Comments comments={comments} />
      <CommentsForm />
    </>
  );
};

export default BlogDetailsContent;
