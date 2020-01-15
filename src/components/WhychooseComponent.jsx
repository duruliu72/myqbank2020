import React, { Component } from 'react';
import examWinerUrl from "../image/img/Exam_Winner.png";
import whychoose1Url from "../image/img/whychoose/whychoose1.png";
import whychoose2Url from "../image/img/whychoose/whychoose2.png";
import whychoose3Url from "../image/img/whychoose/whychoose3.png";
import whychoose4Url from "../image/img/whychoose/whychoose4.png";
import whychoose5Url from "../image/img/whychoose/whychoose5.png";
import whychoose6Url from "../image/img/whychoose/whychoose6.png";
import whychoose7Url from "../image/img/whychoose/whychoose7.png";
import whychoose8Url from "../image/img/whychoose/whychoose8.png";
class Whychoose extends Component {
    state = {}
    render() {
        return (
            <section className="why-choose-myqb page-section" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="headline headline--centred why-choose-myqb__color">Why Choose Myqbank ?</h2>
                        </div>
                    </div>
                    <div className="why-choose-myqb__content">
                        <div className="why-choose-myqb__center">
                            <img src={examWinerUrl} alt="" />
                        </div>
                        <div className="row1 margin-bt">
                            <div className="why-choose-myqb__item ">
                                <div className="why-choose-myqb__img-content">
                                    <img src={whychoose1Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content">
                                    <h4>Great Content</h4>
                                    <p>
                                        When you study at Myqbank, you are assured of some of the
                                        most powerful content - irrespective of the course you
                                        join us for! Each Exam is created and written in order to
                                        make sure that you do not miss out on any possible
                                        question/ logic available on that topic.
                  </p>
                                </div>
                            </div>
                            <div className="why-choose-myqb__item why-choose-myqb__item--right">
                                <div className="why-choose-myqb__img-content why-choose-myqb__img-content--right">
                                    <img src={whychoose2Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content why-choose-myqb__txt-content--right">
                                    <h4>Live Tests for Real Exam Experience</h4>
                                    <p>
                                        Get your All-Bangladesh Rank and feel the thrill of a
                                        real-exam. Groom your pressure handling and time
                                        management skills.
                  </p>
                                </div>
                            </div>
                        </div>
                        <div className="row1 margin-bt">
                            <div className="why-choose-myqb__item ">
                                <div className="why-choose-myqb__img-content">
                                    <img src={whychoose3Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content">
                                    <h4>Online Mock Tests & Free Quizzes</h4>
                                    <p>
                                        Get practice set, test series, quizzes for exam
                                        preparation.
                  </p>
                                </div>
                            </div>
                            <div className="why-choose-myqb__item why-choose-myqb__item--right">
                                <div className="why-choose-myqb__img-content why-choose-myqb__img-content--right">
                                    <img src={whychoose4Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content why-choose-myqb__txt-content--right">
                                    <h4>Ranking</h4>
                                    <p>
                                        Get your All-Bangladesh Rank and feel the thrill of a
                    real-exam.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row1 margin-bt">
                            <div className="why-choose-myqb__item ">
                                <div className="why-choose-myqb__img-content">
                                    <img src={whychoose5Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content">
                                    <h4>Practice</h4>
                                    <p>
                                        Be exam ready by solving all tests and previous years’
                                        papers!
                  </p>
                                </div>
                            </div>
                            <div className="why-choose-myqb__item why-choose-myqb__item--right">
                                <div className="why-choose-myqb__img-content why-choose-myqb__img-content--right">
                                    <img src={whychoose6Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content why-choose-myqb__txt-content--right">
                                    <h4>Ask and Discuss</h4>
                                    <p>
                                        Ask doubts, discuss shortcuts and other related points
                                        with other users.
                  </p>
                                </div>
                            </div>
                        </div>
                        <div className="row1">
                            <div className="why-choose-myqb__item ">
                                <div className="why-choose-myqb__img-content">
                                    <img src={whychoose7Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content">
                                    <h4>Personalized, detailed Analysis</h4>
                                    <p>
                                        Know your weaknesses, strengths and everything else that
                                        you need to know to improve your score and rank.
                  </p>
                                </div>
                            </div>
                            <div className="why-choose-myqb__item why-choose-myqb__item--right">
                                <div className="why-choose-myqb__img-content why-choose-myqb__img-content--right">
                                    <img src={whychoose8Url} alt="" />
                                </div>
                                <div className="why-choose-myqb__txt-content why-choose-myqb__txt-content--right">
                                    <h4>Latest Exam Notifications</h4>
                                    <p>Stay updated with the upcoming exam announcements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Whychoose;