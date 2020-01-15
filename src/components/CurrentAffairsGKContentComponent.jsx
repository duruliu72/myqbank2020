import React, { Component } from 'react';
import error_404Url from "../image/img/question_bank/error_404.jpg";
class CurrentAffairsGKContent extends Component {
    state = {}
    render() {
        return (
            <section className="about-us page-section">
                <div className="wrapper">
                    <h2 className="headline headline--centred about-us__color">Current affairs and General knowledge</h2>
                    <div className="row1">
                        <div className="about-us_wrapper">
                            <div className="about-us_img">
                                <img src={error_404Url} alt="dd" />
                            </div>
                            <div className="about-us__content">
                                <p style={{ textAlign: "center" }}>Note: Something amazing is coming soon!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CurrentAffairsGKContent;