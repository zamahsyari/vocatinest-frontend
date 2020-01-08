import React from "react";
import Template from "../components/Template";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchSearchResults } from "../redux/middleware";

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults.data,
    activeResult: state.searchResults.active
  };
};

class JobAll extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchSearchResults(this.state));
  }
  render() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    const lightBlue = "#67a4e5";
    const JobCard = props => {
      const Card = styled.div`
        background-color: white;
        padding: 16px;
        border-radius: 8px;
        .row {
          .col-md-4 {
            img {
              width: 100%;
              border-radius: 8px;
            }
          }
          .col-md-8 {
            h5 {
              font-size: 12pt;
              color: ${darkBlue};
              margin: 0px;
            }
            b {
              display: block;
              font-size: 11pt;
              font-weight: normal;
              color: ${mediumBlue};
            }
            i {
              display: block;
              margin-top: 16px;
              margin-bottom: 16px;
              text-style: none;
              color: #777;
              font-size: 10pt;
            }
          }
          .col {
            button {
              display: block;
              width: 100%;
              background-color: ${darkBlue};
              font-size: 12pt;
              font-weight: bold;
              border-radius: 8px;
            }
          }
        }
      `;
      return (
        <Card>
          <Row>
            <Col md={4}>
              <img src={props.data.image} />
            </Col>
            <Col md={8}>
              <h5>{props.data.title}</h5>
              <b>{props.data.company}</b>
              <i>{props.data.location}</i>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Apply</Button>
            </Col>
          </Row>
        </Card>
      );
    };

    const ContentCard = props => {
      const renderContentList = data => {
        return data.map(item => {
          return <li>{item}</li>;
        });
      };
      const Content = styled.div`
        .row {
          .col {
            font-size: 11pt;
            h4 {
              color: ${mediumBlue};
              font-size: 12pt;
              font-weightl: bold;
              margin-top: 16px;
            }
            ul {
              margin-left: -40px;
              li {
                list-style: none;
              }
            }
            button {
              display: block;
              font-size: 12pt;
              font-weight: bold;
              border-radius: 8px;
              width: 100%;
              margin-top: 16px;
              padding: 16px;
              background-color: ${darkBlue};
            }
          }
          .col-md-2 {
            img {
              max-width: 100%;
              border-radius: 8px;
            }
          }
          .col-md-10 {
            margin-bottom: 16px;
            h5 {
              font-size: 14pt;
              font-weight: bold;
              margin-bottom: 8px;
              color: ${darkBlue};
              margin: 0px;
            }
            b {
              font-weight: normal;
              font-size: 12pt;
              display: block;
              color: ${mediumBlue};
            }
            i {
              font-size: 12pt;
              font-style: normal;
              color: #777;
              display: block;
            }
            p {
              color: #777;
              font-size: 10pt;
            }
            button {
              display: block;
              font-size: 12pt;
              font-weight: bold;
              border-radius: 8px;
              width: 100%;
              max-width: 300px;
              background-color: ${darkBlue};
            }
          }
        }
      `;
      return (
        <Content>
          <Row>
            <Col md={2}>
              <img src={props.data.image} alt="logo" />
            </Col>
            <Col md={10}>
              <h5>{props.data.title}</h5>
              <b>{props.data.company}</b>
              <i>{props.data.location}</i>
              <p>
                Diposting {props.data.posted_at} - {props.data.views} Views
              </p>
              <Button>Apply</Button>
            </Col>
          </Row>
          <Row>
            <Col>{props.data.excerpt}</Col>
          </Row>
          <Row>
            <Col>
              <h4>Deskripsi Pekerjaan:</h4>
              <ul>{renderContentList(props.data.descriptions)}</ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Syarat:</h4>
              <ul>{renderContentList(props.data.conditions)}</ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>{renderContentList(props.data.guides)}</ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Level:</h4>
              {props.data.level}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Lihat Selengkapnya</Button>
            </Col>
          </Row>
        </Content>
      );
    };

    const SidebarDiv = styled.div`
      padding: 16px;
      background-color: #eee;
      margin-top: 32px;
      height: 100vh;
      overflow-y: scroll;
      h4 {
        font-size: 14pt;
        margin: 0px;
        color: ${darkBlue};
      }
      b {
        font-size: 14pt;
        font-weight: normal;
        display: block;
        color: ${darkBlue};
      }
      i {
        font-size: 10pt;
        font-weight: bold;
        font-style: normal;
        display: block;
        margin-bottom: 20px;
      }
      ul {
        margin-left: -40px;
        li {
          list-style: none;
          margin-bottom: 16px;
        }
      }
    `;

    const ContentDiv = styled.div`
      height: 100vh;
      padding: 32px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-top: 32px;
      overflow-y: scroll;
    `;
    const getSearchResults = () => {
      return this.props.searchResults.map(item => {
        return (
          <li>
            <JobCard data={item} />
          </li>
        );
      });
    };
    return (
      <Template>
        <Container fluid={true}>
          <Row>
            <Col md={3}>
              <SidebarDiv>
                <h4>Web Programmer</h4>
                <b>di Jakarta</b>
                <i>252 Hasil</i>
                <ul>{getSearchResults()}</ul>
              </SidebarDiv>
            </Col>
            <Col md={9}>
              <ContentDiv>
                <ContentCard data={this.props.activeResult} />
              </ContentDiv>
            </Col>
          </Row>
        </Container>
      </Template>
    );
  }
}

export default connect(mapStateToProps)(JobAll);
