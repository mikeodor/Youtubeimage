import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
