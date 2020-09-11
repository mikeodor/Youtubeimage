import React, { Component } from "react";

import Header from "./components/Header";
import FormArea from "./components/FormArea";
import ImageBox from "./components/ImageBox";
import TextArea from "./components/TextArea";
import Donate from "./components/Donate";
import { Route, Switch } from "react-router";
import App from "./App";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route path="/" component={App} exact />

          <Route path="/donate" component={Donate} />
        </Switch>
      </main>
    );
  }
}

export default Home;
