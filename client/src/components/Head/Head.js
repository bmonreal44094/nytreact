import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

const Head = () =>
  <Container fluid>
    <Row>    
      <Col size="md-12">
        <Jumbotron>
          <h1 style={{ textAlign: "center" }} >New Your Times Article Scrubber</h1>
          <h4 style={{ textAlign: "center" }} >Search for and annotate articles of interest</h4>
        </Jumbotron>
      </Col>
    </Row>
  </Container>

export default Head;
