import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faThumbsUp,
  faList,
  faStar,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
const lightBlue = "#67a4e5";
const darkBlue = "#195b9f";
const Div = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  margin-right: -16px;
  position: relative;
  z-index: 20;
  box-shadow: 0px 5px 5px #777777;
  height: 100vh;
  ul {
    margin-left: -40px;
    li {
      list-style: none;
      padding-top: 16px;
      padding-bottom: 16px;
      margin-left: 16px;
      margin-right: 16px;
      font-size: 10pt;
      border-top: 0px solid #777;
      border-left: 0px solid #777;
      border-right: 0px solid #777;
      border-bottom: 1px solid ${lightBlue};
      svg {
        color: ${darkBlue};
        font-size: 14pt;
        margin-right: 16px;
      }
    }
  }
`;

class Sidebar extends React.Component {
  gotoLink(link) {
    this.props.history.push(link);
  }
  getMenu() {
    const menu = [
      {
        id: 1,
        icon: faUser,
        title: "Profil",
        link: "/profile"
      },
      {
        id: 2,
        icon: faSearch,
        title: "Daftar Lowongan",
        link: "/joball"
      },
      {
        id: 3,
        icon: faThumbsUp,
        title: "Rekomendasi Pekerjaan",
        link: "/joball"
      },
      {
        id: 4,
        icon: faList,
        title: "Aplikasi",
        link: "/joball"
      },
      {
        id: 5,
        icon: faStar,
        title: "Favorit",
        link: "/joball"
      },
      {
        id: 6,
        icon: faQuestion,
        title: "Bantuan",
        link: "/help"
      }
    ];
    return menu.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => {
            this.gotoLink(item.link);
          }}
        >
          <FontAwesomeIcon icon={item.icon} /> {item.title}
        </li>
      );
    });
  }

  render() {
    return (
      <Div>
        <ul>{this.getMenu()}</ul>
      </Div>
    );
  }
}

export default withRouter(Sidebar);
