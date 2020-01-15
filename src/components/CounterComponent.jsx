import React, { Component } from 'react';
class Counter extends Component {
    state = {}
    render() {
        return (
            <section className="myqb-counter page-section">
                <div className="wrapper">
                    <div className="row">
                        <div className="counter-col-3">
                            <div className="myqb-counter__item">
                                <div className="myqb-counter__img">
                                    <img src="img/Countdown_Section/stuents-icon.png" alt="" />
                                </div>
                                <div className="myqb-counter__content">
                                    <h3>
                                        <span>5000</span> Student
                    </h3>
                                    <p>Are available on myqbank</p>
                                </div>
                            </div>
                        </div>
                        <div className="counter-col-3">
                            <div className="myqb-counter__item">
                                <div className="myqb-counter__img">
                                    <img src="img/Countdown_Section/question-icon.png" alt="" />
                                </div>
                                <div className="myqb-counter__content">
                                    <h3>
                                        <span>10000</span> Questions
                    </h3>
                                    <p>Are available on Myqbank</p>
                                </div>
                            </div>
                        </div>
                        <div className="counter-col-3">
                            <div className="myqb-counter__item">
                                <div className="myqb-counter__img">
                                    <img
                                        src="img/Countdown_Section/Mock test icon.png"
                                        alt=""
                                    />
                                </div>
                                <div className="myqb-counter__content">
                                    <h3>
                                        <span>50000</span> Mocktests
                    </h3>
                                    <p>Attempted on our platform</p>
                                </div>
                            </div>
                        </div>
                        <div className="counter-col-3">
                            <div className="myqb-counter__item">
                                <div className="myqb-counter__img">
                                    <img src="img/Countdown_Section/times-icon.png" alt="" />
                                </div>
                                <div className="myqb-counter__content">
                                    <h3>
                                        <span>10000</span> Times
                    </h3>
                                    <p>Myqbank App Downloads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Counter;