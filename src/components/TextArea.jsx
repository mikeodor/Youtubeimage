import React, { Component } from "react";

class TextArea extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item active">
            <h5>How to Generate YouTube Thumbnail</h5>
          </li>
          <li class="list-group-item">
            {" "}
            <h6>Step 1: Go to www.YouTube.com, Search a video.</h6>
          </li>
          <li class="list-group-item">
            {" "}
            <h6>
              Step 2: Copy the URL of the video (Example:
              https://youtu.be/g4NWvrF5Z8g).
            </h6>
          </li>
          <li class="list-group-item">
            {" "}
            <h6>
              Step 3: Paste that URL in the box given above and then click the
              "Generate" button.
            </h6>
          </li>
          <li class="list-group-item">
            {" "}
            <h6>Step 4: Choose your Thumbnail size and Download it.</h6>
          </li>
        </ul>
        <footer className="alert alert-primary" style={{ color: "black" }}>
          Developed by miwares
        </footer>
      </div>
    );
  }
}

export default TextArea;
