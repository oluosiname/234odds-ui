import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Index";
import Event from "./pages/Event/index";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Provider store={store}>
          <React.Fragment>
            <main className="bg-black min-h-screen h-100 md:pt-12 font-roboto">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/events/:eventId">
                <Event />
              </Route>
              <Route exact path="/competitions/:competition">
                <Home />
              </Route>
              <Route exact path="/country/:country">
                <Home />
              </Route>
              <Footer />
            </main>
          </React.Fragment>
        </Provider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
