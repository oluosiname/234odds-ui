import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Index";
import Event from "./pages/Event/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <main className="bg-brand-primary-100 min-h-screen h-100">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events/:eventId">
            <Event />
          </Route>
          {/* <Route exact path="/competitions/:competitionId/events">
          <Home />
        </Route> */}
        </main>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
