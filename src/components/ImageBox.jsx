import React, { Component } from "react";
import ImagesSection from "./ImagesSection";
class ImageBox extends Component {
  state = {};
  render() {
    if (this.props.url === "") {
      return <h6></h6>;
    } else {
      return (
        <div>
          <ImagesSection url={this.props.url} />
        </div>
      );
    }
  }
}

export default ImageBox;
