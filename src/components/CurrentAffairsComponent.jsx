import React, { Component } from 'react';
import currentaffairs2019 from "../image/img/currentaffairs2019.png";
class CurrentAffirs extends Component {
    state = {}
    render() {
        return (
            <section className="current-affairs" id="current_affairs">
                <div className="wrapper">
                    <div className="row">
                        <div className="current-affairs__logo">
                            <img src={currentaffairs2019} alt="" />
                        </div>
                        <div className="current-affairs__content col">
                            <h2 className="headline current-affairs__headline">
                                Current Affairs {"&"} GK
              </h2>
                            <p>
                                Preparation for any Competitive Exam is incomplete without
                                regular practice of GK and Current Affairs. Download Myqbank's
                App {"&"} Stay updated with the Latest Happenings. Practice Daily
                                                                                                                                                                                                                                                            Quizzes to be Exam-Ready.
              </p>
                        </div>
                        <div className="current-affairs__btn col">
                            <a className="btn btn-color" href="current_affairs.html">
                                Start Preparation
              </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CurrentAffirs;