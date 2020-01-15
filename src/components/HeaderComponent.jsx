import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../image/img/logo.png";
class Header extends Component {
  render() {
    return (
      <header className="myqb-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img className="logo-size" src={logoUrl} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav myqbank-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link smooth-menu" href="#exam">
                    Exam <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/currentaffairs">
                    Current Affairs
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-menu" href="#become_partner">
                    Become Partner
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/opportunities">
                    Surprise Opportunity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/questionbank">
                    Question Bank
                  </Link>
                </li>
              </ul>
              <span className="navbar-text">
                <Link className="btn signin-up" to="/login">
                  Login
                </Link>
                <Link className="btn signin-up" to="/register">
                  Sign Up
                </Link>
              </span>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
