import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Miwares
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="btn btn-success btn-sm">
                  Home{" "}
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span>
                    {" "}
                    <Link to="/Donate" className="btn btn-success btn-sm">
                      Donate{" "}
                    </Link>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
      </div>
    );
  }
}

export default Header;
