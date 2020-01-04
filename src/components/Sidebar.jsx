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
import { Link } from "react-router-dom";
const lightBlue = "#67a4e5";
const darkBlue = "#195b9f";
const Div = styled.div`
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
  getMenu() {
    const menu = [
      {
        id: 1,
        icon: faUser,
        title: "Profil"
      },
      {
        id: 2,
        icon: faSearch,
        title: "Daftar Lowongan"
      },
      {
        id: 3,
        icon: faThumbsUp,
        title: "Rekomendasi Pekerjaan"
      },
      {
        id: 4,
        icon: faList,
        title: "Aplikasi"
      },
      {
        id: 5,
        icon: faStar,
        title: "Favorit"
      },
      {
        id: 6,
        icon: faQuestion,
        title: "Bantuan"
      }
    ];
    return menu.map(item => {
      return (
        <li key={item.id}>
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

export default Sidebar;
