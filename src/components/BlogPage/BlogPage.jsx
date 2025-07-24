import React from "react";
import blogData from "@/data/BlogData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../Image/Image";

const BlogPage = () => {
  const { carouselData } = blogData;

  return (
    <section className='sec-pad-top sec-pad-bottom'>
      <Container>
        <Row className='gutter-y-30'>
          {carouselData.map(
            ({ id, image, date, lists, title, link, linkIcon, linkText }) =>
              <Col sm={12} md={6} lg={4} key={id}>
                <div className='blog-card'>
                  <div className='blog-card__image'>
                    {/* {img && <GatsbyImage image={img} alt='' />} */}
                    <Image relativePath={image} alt="" />
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
              </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BlogPage;
