import React, { Component } from 'react';
import partner1Url from "../image/img/partner/partner1.gif";
import partner2Url from "../image/img/partner/partner2.gif";
import partner3Url from "../image/img/partner/partner3.gif";
class Partner extends Component {
    state = {}
    render() {
        return (
            <section className="myqr-become-partner page-section" id="become_partner">
                <div className="wrapper">
                    <h2 className="headline headline--centred">Partner with Us</h2>
                    <div className="row">
                        <div className="col-4">
                            <div className="myqr-become-partner__item">
                                <div className="myqr-become-partner__img">
                                    <img src={partner1Url} alt="Create Imge" />
                                </div>
                                <div className="myqr-become-partner__content">
                                    <h3>
                                        <span>Create</span> Your own Mocktest
                    </h3>
                                    <p>Make your own mock test easily.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="myqr-become-partner__item">
                                <div className="myqr-become-partner__img">
                                    <img src={partner2Url} alt="Create Imge" />
                                </div>
                                <div className="myqr-become-partner__content">
                                    <h3>
                                        <span>Upload</span> your course /mock test
                    </h3>
                                    <p>Videos, quizzes, presentations, blogs or documents</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="myqr-become-partner__item">
                                <div className="myqr-become-partner__img">
                                    <img src={partner3Url} alt="Create Imge" />
                                </div>
                                <div className="myqr-become-partner__content">
                                    <h3>
                                        <span>Sell </span>your course /mock test
                    </h3>
                                    <p>Revenue you can count on month after month.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="myqr-become-partner__btn">
                        <a className="btn " href="o">Become Partner Today</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;