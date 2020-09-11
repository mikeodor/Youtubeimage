import React, { Component } from "react";

class ImagesSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>
          <h6>Video Thumbnail : Four Small Thumbnails (120x90)</h6>
          <img
            src={"http://img.youtube.com/vi/" + this.props.url + "/default.jpg"}
            alt=""
          />
          {""}
          <img
            src={"http://img.youtube.com/vi/" + this.props.url + "/1.jpg"}
            alt=""
          />
          {""}
          <img
            src={"http://img.youtube.com/vi/" + this.props.url + "/2.jpg"}
            alt=""
          />
          <img
            src={"http://img.youtube.com/vi/" + this.props.url + "/3.jpg"}
            alt=""
          />
          <br />
          <h6>
            [{" "}
            <a
              download="default.jpg"
              href={
                "http://img.youtube.com/vi/" + this.props.url + "/default.jpg"
              }
            >
              download
            </a>{" "}
            ] / [ Right click Save Image as ]
          </h6>
        </span>
        <hr />
        <br />

        <span>
          <h6>Video Thumbnail : Medium Quality (320x180)</h6>
          <img
            src={
              "http://img.youtube.com/vi/" + this.props.url + "/mqdefault.jpg"
            }
            alt=""
          />
        </span>

        <h6>
          [{" "}
          <a
            download="default.jpg"
            href={
              "http://img.youtube.com/vi/" + this.props.url + "/mqdefault.jpg"
            }
          >
            download
          </a>{" "}
          ] / [ Right click Save Image as ]
        </h6>
        <hr />
        <br />
        <span>
          <h6>Video Thumbnail : High Quality (480x360)</h6>

          <img
            src={
              "http://img.youtube.com/vi/" + this.props.url + "/hqdefault.jpg"
            }
            class="img-fluid"
            alt="Responsive image"
          ></img>
        </span>
        <h6>
          [{" "}
          <a
            download="default.jpg"
            href={
              "http://img.youtube.com/vi/" + this.props.url + "/hqdefault.jpg"
            }
          >
            download
          </a>{" "}
          ] / [ Right click Save Image as ]
        </h6>
        <hr />
        <br />
        <span>
          <h6>Video Thumbnail : High Resolution / Definition (1280x720)</h6>

          <img
            src={
              "http://img.youtube.com/vi/" +
              this.props.url +
              "/maxresdefault.jpg"
            }
            class="img-fluid"
            alt="Responsive image"
          />
        </span>
        <h6>
          [{" "}
          <a
            download="default.jpg"
            href={
              "http://img.youtube.com/vi/" +
              this.props.url +
              "/maxresdefault.jpg"
            }
          >
            download
          </a>{" "}
          ] / [ Right click Save Image as ]
        </h6>
        <hr />
      </div>
    );
  }
}

export default ImagesSection;
