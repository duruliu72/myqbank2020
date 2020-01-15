import React, { Component } from "react";
import quality1Url from "../image/img/quality/quality1.png";
import quality1Ur2 from "../image/img/quality/quality2.png";
import quality1Ur3 from "../image/img/quality/quality3.png";
import quality1Ur4 from "../image/img/quality/quality4.png";
import quality1Ur5 from "../image/img/quality/quality5.png";
class Quality extends Component {
  state = {};
  render() {
    return (
      <section className="myqb-quality">
        <div className="wrapper">
          <div className="myqb-quality__wrapper">
            <div className="myqb-quality__item">
              <img src={quality1Url} alt="" />
            </div>
            <div className="myqb-quality__item">
              <img src={quality1Ur2} alt="" />
            </div>
            <div className="myqb-quality__item">
              <img src={quality1Ur3} alt="" />
            </div>
            <div className="myqb-quality__item">
              <img src={quality1Ur4} alt="" />
            </div>
            <div className="myqb-quality__item">
              <img src={quality1Ur5} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quality;
