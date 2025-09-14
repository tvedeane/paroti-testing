import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { useI18next } from "gatsby-plugin-react-i18next";
import { getData } from "@/utils/getData";

const BlogDetailsForm = () => {
  const { language } = useI18next();
  const donationsDetails = getData(language, "DonationDetails");
  const { form } = donationsDetails;
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);
  if (!isMount) {
    return null;
  }
  return (
    <div className="blog-details__form">
      <h3 className="blog-details__sec__title">{form.title}</h3>
      <form action="#" className="contact-one__form contact-form-validated">
        <Row>
          <Col md={6}>
            <input type="text" placeholder="Your name" name="name" />
          </Col>
          <Col md={6}>
            <input type="text" placeholder="Email address" name="email" />
          </Col>
          <Col md={12}>
            <textarea name="message" placeholder="Write a message"></textarea>
          </Col>
          <Col md={12}>
            <button type="submit" className="thm-btn contact-one__btn">
              <span>Submit comment</span>
            </button>
          </Col>
        </Row>
      </form>
      <div className="result"></div>
    </div>
  );
};

export default BlogDetailsForm;
