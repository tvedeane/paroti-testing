import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogDetailsContent from "./BlogDetailsContent";
import Sidebar from "./Sidebar";

const BlogDetailsPage = () => {
  return (
    <section className='sec-pad-top sec-pad-bottom blog-details'>
      <Container>
        <Row className='gutter-y-60'>
          <Col lg={8}>
            <BlogDetailsContent />
          </Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage;
