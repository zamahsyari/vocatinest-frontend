import React from "react";
import Template from "../components/DashboardTemplate";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import background from "../assets/background.jpg";
import testlogo from "../assets/test_logo.png";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
  fetchCharacterTests,
  ansCharacterTest,
  updateActiveCharacterTest,
  submitProfile
} from "../redux/middleware";

const mapStateToProps = state => {
  return {
    data: state.characters.data,
    active: state.characters.active,
    selected_company_categories: state.companyKinds.selected,
    selected_job_categories: state.jobCategories.selected,
    selected_job_kinds: state.jobKinds.selected,
    selected_jobs: state.professions.selected,
    character_test_answers: state.characters.data
  };
};

class CharacterTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1
    };
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchCharacterTests(this.state));
  }
  async submit() {
    console.log("submitting");
    let data = {
      selected_company_categories: this.props.selected_company_categories,
      selected_job_categories: this.props.selected_job_categories,
      selected_job_kinds: this.props.selected_job_kinds,
      selected_jobs: this.props.selected_jobs,
      character_test_answers: this.props.character_test_answers,
      user_id: parseInt(localStorage.getItem("user_id")),
      sex: localStorage.getItem("sex"),
      school_id: parseInt(localStorage.getItem("school_id")),
      grade: parseInt(localStorage.getItem("grade")),
      graduate_year: parseInt(localStorage.getItem("graduate_year")),
      organization_role: localStorage.getItem("organization_role"),
      organization_name: localStorage.getItem("organization_name"),
      organization_month_start: localStorage.getItem(
        "organization_month_start"
      ),
      organization_year_start: localStorage.getItem("organization_year_start"),
      organization_month_end: localStorage.getItem("organization_month_end"),
      organization_year_end: localStorage.getItem("organization_year_end"),
      smp_name: localStorage.getItem("smp_name"),
      smp_month_start: localStorage.getItem("smp_month_start"),
      smp_year_start: localStorage.getItem("smp_year_start"),
      smp_month_end: localStorage.getItem("smp_month_end"),
      smp_year_end: localStorage.getItem("smp_year_end"),
      smp_score: parseFloat(localStorage.getItem("smp_score")),
      image: localStorage.getItem("image")
    };
    this.props.dispatch(submitProfile(data));
    this.props.history.push("/done");
  }
  render() {
    const darkBlue = "#195b9f";
    const mediumBlue = "#0099e2";
    const lightBlue = "#67a4e5";
    const lightestBlue = "#bbdcff";

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

    const renderQuestion = () => {
      let questions = shuffle(this.props.data);
      while (this.props.data.length === 15) {
        return questions.map((item, index) => {
          let total = questions.length;
          if (index < total - 1) {
            return (
              <li key={item.id}>
                <QuestionCard
                  title={item.title}
                  id={item.id}
                  current={item.id}
                  total={total}
                  nextAction={updateActiveCharacterTest(item.id + 1)}
                  is_last={false}
                />
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <QuestionCard
                  title={item.title}
                  id={item.id}
                  current={item.id}
                  total={5}
                  is_last={true}
                />
              </li>
            );
          }
        });
      }
    };

    const renderActiveClass = current => {
      if (this.state.active === current) {
        return "active";
      } else {
        return "not-active";
      }
    };

    const renderAnswer = (qid, data) => {
      return data.map((item, index) => {
        return (
          <li
            className={renderActiveClass(index)}
            key={item.id}
            onClick={() => {
              this.props.dispatch(
                ansCharacterTest({ id: qid, answer: item.id })
              );
              this.setState({
                active: index
              });
            }}
          >
            {item.title}
          </li>
        );
      });
    };

    const answers = [
      {
        id: 1,
        title: "Tidak Sama Sekali"
      },
      {
        id: 2,
        title: "Jarang"
      },
      {
        id: 3,
        title: "Kadang-Kadang"
      },
      {
        id: 4,
        title: "Sering"
      },
      {
        id: 5,
        title: "Sangat Sering"
      }
    ];

    const renderNext = (is_last, action) => {
      if (is_last === true) {
        return <Button onClick={() => this.submit()}>Selanjutnya</Button>;
      } else {
        return (
          <Button
            onClick={() => {
              this.props.dispatch(action);
              this.setState({ active: -1 });
            }}
          >
            Selanjutnya
          </Button>
        );
      }
    };

    const QuestionCard = props => {
      const QuestionDiv = styled.div`
        margin-top: 64px;
        margin-bottom: 64px;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        background-color: white;
        font-size: 11pt;
        text-align: left;
        box-shadow: 0px 0px 5px #777;
        border-radius: 8px;
        padding: 32px;
        display: none;
        &.active {
          display: block;
        }
        .header {
          margin-left: -40px;
          li {
            display: inline-block;
            h3 {
              font-size: 18pt;
              font-weight: bold;
              margin-bottom: 0px;
              color: ${darkBlue};
            }
            &:last-child {
              float: right;
            }
          }
        }
        p {
          font-size: 12pt;
          margin-bottom: 32px;
        }
        .answer {
          margin-left: -40px;
          margin-bottom: 48px;
          li {
            background-color: ${lightestBlue};
            padding: 16px;
            color: ${darkBlue};
            font-weight: bold;
            margin-bottom: 16px;
            border-radius: 8px;
            cursor: pointer;
            &.active {
              background-color: ${darkBlue};
              color: ${lightestBlue};
            }
          }
        }
        button {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `;
      let active = "not-active";
      if (props.current === this.props.active) {
        active = "active";
      }
      return (
        <QuestionDiv className={active}>
          <ul className="header">
            <li>
              <h3>Pertanyaan</h3>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() =>
                  this.props.dispatch(
                    updateActiveCharacterTest(props.current - 1)
                  )
                }
              />
              &nbsp;<b>{props.current}</b>/{props.total}&nbsp;
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() =>
                  this.props.dispatch(
                    updateActiveCharacterTest(props.current + 1)
                  )
                }
              />
            </li>
          </ul>
          <p>{props.title}</p>
          <ul className="answer">{renderAnswer(props.id, answers)}</ul>
          {renderNext(props.is_last, props.nextAction)}
        </QuestionDiv>
      );
    };

    const shuffle = array => {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

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
                <li className="active">
                  <FontAwesomeIcon icon={faCheckCircle} /> Tes Karakter
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> Selesai
                </li>
              </ul>
            </div>
            <ul className="title">
              <li>
                <img src={testlogo} alt="job_logo" />
              </li>
              <li>
                <h3>Tes Karakter</h3>
              </li>
            </ul>
            <ul className="content">{renderQuestion()}</ul>
          </Div>
        </div>
      </Template>
    );
  }
}

export default connect(mapStateToProps)(CharacterTest);
