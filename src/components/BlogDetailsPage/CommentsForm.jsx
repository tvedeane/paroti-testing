
import React from "react";
import { Col, Row } from "react-bootstrap";
const inputs = ["name", "email", "message"];
const CommentsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };
  return (
    <div className='blog-details__form'>
      <h3 className='blog-details__sec__title'>Leave a comment</h3>
      <form
        onSubmit={handleSubmit}
        className='contact-one__form contact-form-validated'
      >
        <Row>
          <Col xl={6}>
            <input type='text' placeholder='Your name' name='name' />
          </Col>
          <Col xl={6}>
            <input type='email' placeholder='Email address' name='email' />
          </Col>

          <Col xl={12}>
            <textarea name='message' placeholder='Write Comment'></textarea>
          </Col>
          <Col xl={12}>
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

export default CommentsForm;
