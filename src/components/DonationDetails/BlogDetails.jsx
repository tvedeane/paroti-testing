import React from "react";
import { Link } from "gatsby";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const BlogDetails = () => {
  const { language } = useI18next();
  const donationsDetails = getData(language, "DonationDetails");
  const { commentsTitle, comments } = donationsDetails;
  return (
    <div className="blog-details__comments">
      <h3 className="blog-details__sec__title">{commentsTitle}</h3>
      <ul className="list-unstyled blog-details__comments__list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Image relativePath={comment.image} />

            <div className="blog-details__comments__meta">
              <h3 className="blog-details__comments__name">{comment.name}</h3>

              <p className="blog-details__comments__date">{comment.date}</p>
            </div>
            <p className="blog-details__comments__text">{comment.text}</p>

            <a href="#" className="thm-btn blog-details__comments__btn">
              <span>{comment.btnText}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
