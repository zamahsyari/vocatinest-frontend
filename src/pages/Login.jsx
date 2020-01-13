import React from "react";
import Template from "../components/Template";
import { connect } from "react-redux";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "./Login.scss";
import { Link, withRouter } from "react-router-dom";
import { fetchToken, login } from "../redux/middleware";

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
    this.submit = this.submit.bind(this);
  }

  getAlert() {
    if (this.props.error !== "") {
      return <Alert variant="danger">{this.props.error}</Alert>;
    }
  }

  async submit(e) {
    e.preventDefault();
    let resp = await this.props.dispatch(login(this.state));
    if (resp !== false) {
      this.props.history.push("/myhistory");
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
              <Button onClick={e => this.submit(e)}>Masuk</Button>
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

export default withRouter(connect(mapStateToProps)(Login));
