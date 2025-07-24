import React, { useEffect, useState } from "react";
import { donationsDetails } from "@/data/DonationDetails";
import { Col, Row } from "react-bootstrap";

const BlogDetailsForm = () => {
  const { form } = donationsDetails;
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);
  if (!isMount) {
    return null;
  }
  return (
    <div className='blog-details__form'>
      <h3 className='blog-details__sec__title'>{form.title}</h3>
      <form action='#' className='contact-one__form contact-form-validated'>
        <Row>
          <Col md={6}>
            <input type='text' placeholder='Your name' name='name' />
          </Col>
          <Col md={6}>
            <input type='text' placeholder='Email address' name='email' />
          </Col>
          <Col md={12}>
            <textarea name='message' placeholder='Write a message'></textarea>
          </Col>
          <Col md={12}>
            <button type='submit' className='thm-btn contact-one__btn'>
              <span>Submit comment</span>
            </button>
          </Col>
        </Row>
      </form>
      <div className='result'></div>
    </div>
  );
};

export default BlogDetailsForm;
