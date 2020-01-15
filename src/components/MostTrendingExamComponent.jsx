import React, { Component } from 'react';
import mostTrendingExam1Url from "../image/img/mostTrendingExam/mosttrendingexam1.png";
class MostTrendingExam extends Component {
    state = {}
    render() {
        return (
            <section className="most-trending-exams page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="headline headline--centred">
                                Most Trending Exams
              </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="most-trending-exams__item">
                                <div className="most-trending-exams__img">
                                    <img src={mostTrendingExam1Url} alt="" />
                                </div>
                                <div className="most-trending-exams__content">
                                    <div className="course-title">
                                        <h4>BCS Special</h4>
                                    </div>
                                    <div className="instractor-name">
                                        <h5>By Md. Durul Hoda</h5>
                                    </div>
                                    <div className="course-price">
                                        <span>$1000</span>
                                        <span>$300</span>
                                        <span>discount</span>
                                    </div>
                                    <div className="couser-btn">
                                        <a className="btn btn-center" href="k">
                                            Join Now
                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="most-trending-exams__item">
                                <div className="most-trending-exams__img">
                                    <img src={mostTrendingExam1Url} alt="" />
                                </div>
                                <div className="most-trending-exams__content">
                                    <div className="course-title">
                                        <h4>BCS Special</h4>
                                    </div>
                                    <div className="instractor-name">
                                        <h5>By Md. Durul Hoda</h5>
                                    </div>
                                    <div className="course-price">
                                        <span>$1000</span>
                                        <span>$300</span>
                                        <span>discount</span>
                                    </div>
                                    <div className="couser-btn">
                                        <a className="btn btn-center" href="o">
                                            Join Now
                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="most-trending-exams__item">
                                <div className="most-trending-exams__img">
                                    <img src={mostTrendingExam1Url} alt="" />
                                </div>
                                <div className="most-trending-exams__content">
                                    <div className="course-title">
                                        <h4>BCS Special</h4>
                                    </div>
                                    <div className="instractor-name">
                                        <h5>By Md. Durul Hoda</h5>
                                    </div>
                                    <div className="course-price">
                                        <span>$1000</span>
                                        <span>$300</span>
                                        <span>discount</span>
                                    </div>
                                    <div className="couser-btn">
                                        <a className="btn btn-center" href="p">
                                            Join Now
                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="most-trending-exams__item">
                                <div className="most-trending-exams__img">
                                    <img src={mostTrendingExam1Url} alt="" />
                                </div>
                                <div className="most-trending-exams__content">
                                    <div className="course-title">
                                        <h4>BCS Special</h4>
                                    </div>
                                    <div className="instractor-name">
                                        <h5>By Md. Durul Hoda</h5>
                                    </div>
                                    <div className="course-price">
                                        <span>$1000</span>
                                        <span>$300</span>
                                        <span>discount</span>
                                    </div>
                                    <div className="couser-btn">
                                        <a className="btn btn-center" href="o">
                                            Join Now
                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MostTrendingExam;