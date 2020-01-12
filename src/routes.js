import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyHistory from "./pages/MyHistory";
import Welcome from "./pages/Welcome";
import Help from "./pages/Help";
import JobAll from "./pages/JobAll";
import JobAspiration from "./pages/JobAspiration";
import Profile from "./pages/Profile";
import Done from "./pages/Done";
import CharacterTest from "./pages/CharacterTest";

const routes = [
  {
    id: 1,
    link: "/",
    component: Home
  },
  {
    id: 2,
    link: "/login",
    component: Login
  },
  {
    id: 3,
    link: "/register",
    component: Register
  },
  {
    id: 4,
    link: "/myhistory",
    component: MyHistory
  },
  {
    id: 5,
    link: "/welcome",
    component: Welcome
  },
  {
    id: 6,
    link: "/help",
    component: Help
  },
  {
    id: 7,
    link: "/joball",
    component: JobAll
  },
  {
    id: 8,
    link: "/jobaspiration",
    component: JobAspiration
  },
  {
    id: 9,
    link: "/profile",
    component: Profile
  },
  {
    id: 10,
    link: "/done",
    component: Done
  },
  {
    id: 11,
    link: "/character",
    component: CharacterTest
  }
];

export default routes;
