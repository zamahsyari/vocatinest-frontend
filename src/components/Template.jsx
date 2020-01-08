import React from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

class Template extends React.Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Container fluid={true} style={{ padding: 0 }}>
          <Row>
            <Col>
              <Navbar />
            </Col>
          </Row>
          <Row>
            <Col>{this.props.children}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Template;
