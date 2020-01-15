import React, { Component } from 'react';
import error_404Url from "../image/img/question_bank/error_404.jpg";
class QuestionBankConponent extends Component {
    state = {}
    render() {
        return (
            <section class="about-us page-section">
                <div class="wrapper">
                    <h2 class="headline headline--centred about-us__color">Explore all previous question papers!</h2>
                    <div class="row1">
                        <div class="about-us_wrapper">
                            <div class="about-us_img">
                                <img src={error_404Url} alt="" />
                            </div>
                            <div class="about-us__content">
                                <p style={{ textAlign: "center" }}>Note: Something amazing is coming soon!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuestionBankConponent;