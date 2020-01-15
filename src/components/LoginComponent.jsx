import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  // email = React.createRef();
  state = {
    account: { email: "", password: "" }
  };
  // componentDidMount() {
  //   this.email.current.focus();
  // }
  handleSubmit = e => {
    e.preventDefault();
    // Call The Server
    // const email = this.email.current.value;
    // console.log(email);
    console.log("Submitted");
  };
  handleChange = ({ currentTarget:input }) => {
    console.log(input);
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  };
  render() {
    return (
      <div className="sign-up-section">
        <div className="card sign-up__card">
          <div className="card-body">
            <div>
              <p className="w-email login-social">Login to Myqbank with</p>
            </div>
            <form action="" method="post">
              <div className="form-group mt-4">
                <div className="col-12">
                  <button className="btn btn-primary myqb-btn btn-fb">
                    <i className="fa fa-facebook-f"></i>Login with facebook
                  </button>
                </div>
              </div>
            </form>
            <form action="" method="post">
              <div className="form-group mt-4">
                <div className="col-12">
                  <button className="btn btn-primary myqb-btn btn-g">
                    <i className="fa fa-google"></i> Login with Google
                  </button>
                </div>
              </div>
            </form>
            <div>
              <p className="w-email login-em">Or login with email or mobile</p>
            </div>
            <form onSubmit={this.handleSubmit} className="mt-4">
              <div className="form-group">
                <div className="col-12">
                  <input
                    value={this.state.account.email}
                    onChange={this.handleChange}
                    name="email"
                    className="form-control myqb-control"
                    type="text"
                    placeholder="Enter Email/Mobile Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-12">
                  <input
                    value={this.state.account.password}
                    onChange={this.handleChange}
                    name="password"
                    className="form-control myqb-control"
                    type="text"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="form-group form-check">
                <div className="col-12">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />
                    Remember me
                  </label>
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="col-12">
                  <button className="btn btn-primary myqb-btn">Login</button>
                </div>
              </div>
              <div className="form-group row mt-4">
                <div className="col-7">
                  <a href="hh">Forgot your password?</a>
                </div>
                <div className="col-5 text-right">
                  <Link to="/register">Create an account</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
