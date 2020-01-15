import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {};
  render() {
    return (
      <div className="sign-up-section">
        <div className="card sign-up__card">
          <div className="card-body">
            <div>
              <p className="w-email w-social">Create your free account</p>
            </div>
            <form action="" method="post">
              <div className="form-group mt-4">
                <div className="col-12">
                  <button className="btn btn-primary myqb-btn btn-fb">
                    <i className="fa fa-facebook-f"></i>Sign up with facebook
                  </button>
                </div>
              </div>
            </form>
            <form action="" method="post">
              <div className="form-group mt-4">
                <div className="col-12">
                  <button className="btn btn-primary myqb-btn btn-g">
                    <i className="fa fa-google"></i> Sign up with Google
                  </button>
                </div>
              </div>
            </form>
            <div>
              <p className="w-email">or create account with email</p>
            </div>
            <form className="mt-4" action="register.html" method="POST">
              <div className="form-group">
                <div className="col-12">
                  <input
                    className="form-control myqb-control"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-12">
                  <input
                    className="form-control myqb-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-12">
                  <input
                    className="form-control myqb-control"
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-12">
                  <input
                    className="form-control myqb-control"
                    type="text"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-group form-check">
                <div className="col-12">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />I
                    accept <a href="d">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="col-12">
                  <button className="btn btn-primary myqb-btn">Sign Up</button>
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="col-12 text-center">
                  <Link to="/login">Already have account?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
