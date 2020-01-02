import React from "react";
import Template from "../components/Template";
import { connect } from "react-redux";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./Login.scss";
import { Link } from "react-router-dom";
import fetchToken from "../redux/middleware";

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  getAlert() {
    if (this.props.error !== "") {
      return <Alert variant="danger">{this.props.error}</Alert>;
    }
  }

  render() {
    return (
      <Template>
        <Container fluid={true} className="login">
          {this.getAlert()}
          <div className="login-form">
            <h3>Masuk</h3>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <ul>
                  <li>
                    <Form.Check type="checkbox" />
                  </li>
                  <li>Biarkan saya tetap masuk</li>
                </ul>
              </Form.Group>
              <Button
                onClick={() => this.props.dispatch(fetchToken(this.state))}
              >
                Masuk
              </Button>
              <Form.Group className="forgot">
                <Link to="/">Lupa password?</Link>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </Template>
    );
  }
}

export default connect(mapStateToProps)(Login);
