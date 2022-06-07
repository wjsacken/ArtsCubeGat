import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceSidebar from "@/components/service-sidebar";
import WebdesignDetailsContent from "@/components/webdesign-details-content";

const ServiceDetails = () => {
  return (
    <section className="commonSection service_detail">
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <WebdesignDetailsContent />
          </Col>
          <Col lg={4} md={12} className="sidebar">
            <ServiceSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
