import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  margin-left: -16px;
  .container {
    .row {
      .col-md-2 {
      }
      .col-md-10 {
        height: 300px;
      }
    }
  }
`;

class Template extends React.Component {
  render() {
    return (
      <Div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Container fluid={true}>
          <Row>
            <Navbar />
          </Row>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col
              md={10}
              style={{ margin: 0, padding: 0, position: "relative" }}
            >
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </Div>
    );
  }
}

export default Template;
