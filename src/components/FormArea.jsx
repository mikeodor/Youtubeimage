import React, { Component } from "react";

class FormArea extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form
        className=""
        style={{ textAlign: "center" }}
        onSubmit={this.props.onSubmit}
      >
        <label>
          <input
            className="form-control"
            id="inlineFormInputName"
            name="mytext"
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            style={{ width: "300px" }}
            placeholder="https://www.youtube.com/watch?v=g4NWvrF5Z8g"
          />
        </label>
        <button
          className="btn btn-success ml-3 mb-3"
          onSubmit={this.props.onSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormArea;
