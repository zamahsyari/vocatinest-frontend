import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const getRoutes = () => {
  return routes.map(item => {
    return (
      <Route key={item.id} exact path={item.link} component={item.component} />
    );
  });
};

function App() {
  return <Switch>{getRoutes()}</Switch>;
}

export default App;
