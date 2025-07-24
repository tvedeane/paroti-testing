import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogDetails from "./BlogDetails";
import DonationCard from "./DonationCard";
import BlogDetailsForm from "./BlogDetailsForm";
import Sidebar from "./Sidebar";

const DonationDetails = () => {
  return (
    <section className='sec-pad-top sec-pad-bottom donations-details'>
      <Container>
        <Row>
          <Col lg={8}>
            <DonationCard />
            <BlogDetails />
            <BlogDetailsForm />
          </Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationDetails;
