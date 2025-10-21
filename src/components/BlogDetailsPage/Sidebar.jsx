import React from "react";

import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "gatsby-plugin-react-i18next";
import Image from "../Image/Image";
import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const Sidebar = () => {
  const { language } = useI18next();
  const sidebar = getData(language, "BlogDetailsPage", "sidebar");
  const { posts, categories, tags } = sidebar;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__single--search">
        <form onSubmit={handleSubmit} action="#">
          <input type="text" placeholder="Search here.." />
          <button type="submit">
            <i className="paroti-icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__single--posts">
        <h3 className="sidebar__title">Recent posts</h3>
        <ul className="list-unstyled sidebar__post">
          {posts.map(({ id, title, image, comments }) => (
            <li key={id}>
              <a href="#">
                <Image relativePath={image} />

                <span className="sidebar__post__meta">
                  <i>
                    <FontAwesomeIcon icon={faComments} />
                  </i>
                  {comments} comments
                </span>
                <span className="sidebar__post__title">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__single--lists">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="list-unstyled sidebar__lists">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__single--tags">
        <h3 className="sidebar__title">Tags</h3>
        <p className="sidebar__tags">
          {tags.map((tag, index) => (
            <Link key={index} to="#">
              {tag}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
