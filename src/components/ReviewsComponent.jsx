import React, { Component } from "react";
import ReviewItem from "./ReviewItemComponent";
import review1Url from "../image/img/review/review1.png";
import review2Url from "../image/img/review/review2.png";
class Reviews extends Component {
  state = {};
  render() {
    return (
      <section className="myqr-review page-section">
        <div className="wrapper">
          <h2 className="headline headline--centred">
            What They're Saying About Us
          </h2>
          <div className="myqr-review__content owl-carousel">
            <ReviewItem
              review_data={{
                url: review1Url,
                p_data: `Constant improvement is possible only when we keep a track
                    of our performance. Myqbank's detailed analysis along with
                    their high quality questions made me better and better with
                    each test that I attempted.`,
                h4_data: "Mashuka Roja",
                h5_data: "Admission test, Dhaka University"
              }}
            ></ReviewItem>
            <ReviewItem
              review_data={{
                url: review2Url,
                p_data: `From self-evaluation to learning time management, Myqbank's tests helped me in every aspect of exam
                preparation.`,
                h4_data: "Lamiya Akter",
                h5_data: "Admission test, Dhaka University"
              }}
            ></ReviewItem>
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
