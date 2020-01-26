import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import Panel from "./components/Panel/Panel";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/login" component={Login} />
        {token ? (
          <Route path="/panel" component={Panel} />
        ) : (
          <Route path="/login" component={Login} />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
