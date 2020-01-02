import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

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
    link: "/profile",
    component: Profile
  }
];

export default routes;
