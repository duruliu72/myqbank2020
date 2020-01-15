import React, { Component } from "react";
import quotes1Url from "../image/img/review/quotes1.png";
import quotes2Url from "../image/img/review/quotes2.png";
class ReviewItem extends Component {
  state = {};
  render() {
    return (
      <div className="myqr-review__item">
        <div className="myqr_review_wrapper">
          <div className="myqb_review_quotes-left">
            <img src={quotes1Url} alt="" />
          </div>
          <div className="myqb_review_quotes-right">
            <img src={quotes2Url} alt="" />
          </div>
          <div className="myqr-review__img">
            <img src={this.props.review_data.url} alt="" />
          </div>
          <div className="myqr-review__txt">
            <p>{this.props.review_data.p_data}</p>
            <h4 className="myqr-review__name">
              {this.props.review_data.h4_data}
            </h4>
            <h5>{this.props.review_data.h5_data}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
