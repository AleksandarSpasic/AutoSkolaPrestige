import React from "react";
import "./PanelStyle.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Components
import PanelGallery from "./PanelGallery";
import PanelTerms from "./PanelTerms";

const Panel = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="panel_wrapper">
      <div className="panel_header">
        <p>{localStorage.getItem("token")}</p>
        <p onClick={logout}>Odjavite se</p>
      </div>
      <div className="panel_body">
        <div className="panel_content">
          <Switch>
            <Route exact path="/panel" component={PanelGallery} />
            <Route path="/panel/termini" component={PanelTerms} />
          </Switch>
        </div>
        <div className="panel_menu">
          <Link to="/panel">Galerija</Link>
          <Link to="/panel/termini">Termini</Link>
        </div>
      </div>
    </div>
  );
};

export default Panel;
