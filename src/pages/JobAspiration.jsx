import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import background from "../assets/background.jpg";
import joblogo from "../assets/job_logo.png";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faCross,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  updateActiveJobAspiration,
  fetchJobCategories,
  setJobCategory,
  unsetJobCategory,
  fetchProfessions,
  setProfession,
  unsetProfession,
  fetchJobKinds,
  setJobKind,
  unsetJobKind,
  fetchCompanyKinds,
  setCompanyKind,
  unsetCompanyKind,
  fetchImportants,
  setImportant,
  unsetImportant,
  nextAndGetProfession
} from "../redux/middleware";

const mapStateToProps = state => {
  return {
    active: state.jobAspiration.active,
    jobCategories: state.jobCategories.data,
    selectedJobCategories: state.jobCategories.selected,
    professions: state.professions.data,
    selectedProfessions: state.professions.selected,
    jobKinds: state.jobKinds.data,
    selectedJobKinds: state.jobKinds.selected,
    companyKinds: state.companyKinds.data,
    selectedCompanyKinds: state.companyKinds.selected,
    importants: state.importants.data,
    selectedImportants: state.importants.selected
  };
};

class JobAspiration extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobCategories(this.state));
    this.props.dispatch(fetchJobKinds(this.state));
    this.props.dispatch(fetchCompanyKinds(this.state));
    this.props.dispatch(fetchImportants(this.state));
  }
  render() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    const lightBlue = "#67a4e5";
    const lightestBlue = "#bbdcff";
    const ContentDiv = styled.div`
      background-color: white;
      padding: 32px;
      border-radius: 16px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0px 0px 5px #777;
      display: none;
      &.active{
        display: block;
      }
        ul{
          margin-left: -40px;
          text-align: left;
          li{
            list-style: none;
            display: inline-block;
            color: ${darkBlue};
            font-weight: 600;
            .circle{
              background-color: ${darkBlue}
              padding: 4px;
              border-radius: 50%;
              height: 42px;
              width: 42px;
              text-align:center;
              color: white;
              font-size: 18pt;
            }
            &:first-child{
              margin-right: 32px;
            }
            &:last-child{
              float:right;
              font-size:17pt;
              margin-top: 8px;
            }
          }
        }
        .content{
          margin-left: 72px;
          .form-group{
            text-align: left;
            .form-label{
              color: #555;
            }
            .secondary-label{
              color: ${darkBlue}
              margin-top: 16px;
            }
          }
          ul{
            li{
              display: inline-block;
              margin-right: 8px;
              margin-bottom:16px;
              font-size: 11pt;
              padding-top: 8px;
              padding-bottom: 8px;
              padding-left: 16px;
              padding-right: 16px;
              background-color: ${lightestBlue};
              border-radius: 50px;
              &:last-child{
                margin-top:0px;
                font-size: 11pt;
                float:none;
              }
            }
            &.selected{
              li{
                background-color: white;
                border: 1px dashed ${darkBlue};
              }
            }
          }
        }
      `;

    const fetchJobCategories = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.dispatch(setJobCategory(item))}
          >
            {item.title}
          </li>
        );
      });
    };

    const fetchProfessions = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.dispatch(setProfession(item))}
          >
            {item.title}
          </li>
        );
      });
    };

    const fetchJobKinds = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.dispatch(setJobKind(item))}
          >
            {item.title}
          </li>
        );
      });
    };

    const fetchCompanyKinds = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.dispatch(setCompanyKind(item))}
          >
            {item.title}
          </li>
        );
      });
    };

    const fetchImportants = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.dispatch(setImportant(item))}
          >
            {item.title}
          </li>
        );
      });
    };

    const fetchSelectedJobCategories = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => this.props.dispatch(unsetJobCategory(item))}
          >
            {item.title}
            <span style={{ marginLeft: "16px" }}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </li>
        );
      });
    };

    const fetchSelectedProfessions = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => this.props.dispatch(unsetProfession(item))}
          >
            {item.title}
            <span style={{ marginLeft: "16px" }}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </li>
        );
      });
    };

    const fetchSelectedJobKinds = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => this.props.dispatch(unsetJobKind(item))}
          >
            {item.title}
            <span style={{ marginLeft: "16px" }}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </li>
        );
      });
    };

    const fetchSelectedCompanyKinds = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => this.props.dispatch(unsetCompanyKind(item))}
          >
            {item.title}
            <span style={{ marginLeft: "16px" }}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </li>
        );
      });
    };

    const fetchSelectedImportants = data => {
      return data.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => this.props.dispatch(unsetImportant(item))}
          >
            {item.title}
            <span style={{ marginLeft: "16px" }}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </li>
        );
      });
    };

    const renderButton = (is_last, action) => {
      if (is_last === true) {
        return (
          <Button onClick={() => this.props.history.push("/character")}>
            Selanjutnya
          </Button>
        );
      } else {
        return (
          <Button onClick={() => this.props.dispatch(action)}>
            Selanjutnya
          </Button>
        );
      }
    };

    const MultiSelectCard = props => {
      let active = "not-active";
      if (props.current === this.props.active) {
        active = "active";
      }
      return (
        <ContentDiv className={active}>
          <ul>
            <li>
              <div className="circle">{props.current}</div>
            </li>
            <li>{props.title}</li>
            <li style={{ fontSize: 16 }}>
              <FontAwesomeIcon icon={faChevronLeft} />
              &nbsp;<b>{props.current}</b>/{props.total}&nbsp;
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
          <div className="content">
            <ul>{props.dataFetcher}</ul>
            <ul className="selected">{props.selectedFetcher}</ul>
          </div>
          <br />
          {renderButton(props.is_last, props.nextAction)}
        </ContentDiv>
      );
    };

    const Div = styled.div`
      text-align: center;
      padding-bottom: 32px;
      .progress {
        position: relative;
        margin-bottom: 64px;
        border-radius: 0px;
        padding: 16px;
        height: 60px;
        border-top: 10px solid ${darkBlue};
        background-color: ${lightestBlue};
        ul {
          display: block;
          margin-left: auto;
          margin-right: auto;
          li {
            list-style: none;
            display: inline-block;
            color: #eee;
            margin-right: 64px;
            font-size: 11pt;
            font-weight: bold;
            &.active {
              color: ${darkBlue};
            }
          }
        }
      }
      ul {
        li {
          list-style: none;
        }
      }
      .title {
        li {
          display: inline-block;
          margin-right: 16px;
          h3 {
            color: ${darkBlue};
            font-weight: 600;
          }
        }
      }
      .content {
        li {
          margin-bottom: 32px;
        }
      }
      button {
        font-size: 12pt;
        font-weight: bold;
        border-radius: 8px;
        width: 100%;
        max-width: 300px;
        text-align: center;
        background-color: ${darkBlue};
      }
    `;
    return (
      <Template>
        <div
          style={{
            backgroundImage: "url('" + background + "')",
            backgroundSize: "cover",
            height: "100vh",
            overflow: "scroll"
          }}
        >
          <Div>
            <div className="progress">
              <ul>
                <li className="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Riwayat Diri
                </li>
                <li className="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Aspirasi Pekerjaan
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Tes Karakter
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Selesai
                </li>
              </ul>
            </div>
            <ul className="title">
              <li>
                <img src={joblogo} alt="job_logo" />
              </li>
              <li>
                <h3>Aspirasi Pekerjaan</h3>
              </li>
            </ul>
            <ul className="content">
              <li>
                <MultiSelectCard
                  title={"Bidang Pekerjaan yang Diinginkan"}
                  current={1}
                  total={5}
                  data={this.props.jobCategories}
                  selected={this.props.selectedJobCategories}
                  link={""}
                  dataFetcher={fetchJobCategories(this.props.jobCategories)}
                  selectedFetcher={fetchSelectedJobCategories(
                    this.props.selectedJobCategories
                  )}
                  nextAction={nextAndGetProfession(
                    this.props.selectedJobCategories,
                    2
                  )}
                />
              </li>
              <li>
                <MultiSelectCard
                  title={"Profesi yang Diinginkan"}
                  current={2}
                  total={5}
                  data={this.props.professions}
                  selected={this.props.selectedProfessions}
                  link={""}
                  dataFetcher={fetchProfessions(this.props.professions)}
                  selectedFetcher={fetchSelectedProfessions(
                    this.props.selectedProfessions
                  )}
                  nextAction={updateActiveJobAspiration(3)}
                />
              </li>
              <li>
                <MultiSelectCard
                  title={"Jenis Pekerjaan yang Dicari"}
                  current={3}
                  total={5}
                  data={this.props.jobKinds}
                  selected={this.props.selectedJobKinds}
                  link={""}
                  dataFetcher={fetchJobKinds(this.props.jobKinds)}
                  selectedFetcher={fetchSelectedJobKinds(
                    this.props.selectedJobKinds
                  )}
                  nextAction={updateActiveJobAspiration(4)}
                />
              </li>
              <li>
                <MultiSelectCard
                  title={"Jenis Perusahaan yang Diinginkan"}
                  current={4}
                  total={5}
                  data={this.props.companyKinds}
                  selected={this.props.selectedCompanyKinds}
                  link={""}
                  dataFetcher={fetchCompanyKinds(this.props.companyKinds)}
                  selectedFetcher={fetchSelectedCompanyKinds(
                    this.props.selectedCompanyKinds
                  )}
                  nextAction={updateActiveJobAspiration(5)}
                  is_last={true}
                />
              </li>
              {/* <li>
                <MultiSelectCard
                  title={"Hal yang Penting dalam Berkarir"}
                  current={5}
                  total={5}
                  data={this.props.importants}
                  selected={this.props.selectedImportants}
                  link={""}
                  dataFetcher={fetchImportants(this.props.importants)}
                  selectedFetcher={fetchSelectedImportants(
                    this.props.selectedImportants
                  )}
                />
              </li> */}
            </ul>
          </Div>
        </div>
      </Template>
    );
  }
}

export default connect(mapStateToProps)(JobAspiration);
