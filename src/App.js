import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FormArea from "./components/FormArea";
import ImageBox from "./components/ImageBox";
import TextArea from "./components/TextArea";
import Donate from "./components/Donate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: "",
      value: "",
      error: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    this.state.mytext.includes("youtube.com")
      ? this.setState({
          value: this.state.mytext.slice(-11),
          error: "",
        })
      : this.setState({
          error:
            "Enter a valid youtube address i.e https://www.youtube.com/watch?v=g4NWvrF5Z8g",
          value: "",
        });
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <FormArea
          handleSubmit={this.handleSubmit}
          value={this.state.mytext}
          onChange={this.changeHandler}
          onSubmit={this.submitHandler}
        />
        {this.state.error ? (
          <div class="alert alert-danger" role="alert">
            {this.state.error}
          </div>
        ) : (
          ""
        )}
        <ImageBox url={this.state.value} errorcode={this.state.error} />
        <TextArea />
      </div>
    );
  }
}

export default App;
