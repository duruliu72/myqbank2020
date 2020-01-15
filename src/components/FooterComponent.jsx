import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="myqb-footer">
        <div className="wrapper">
          <div className="myqb-footer_terms">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>SiteMap</span>
          </div>
          <div className="myqb-footer__copy">
            <p>&copy; MyQbank Private Ltd. - 2019 All right reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
