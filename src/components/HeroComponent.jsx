import React, { Component } from 'react';
import heroUrl from "../image/img/hero.png";
class Hero extends Component {
  state = {}
  render() {
    return (<div className="large-hero">
      <div className="wrapper ref">
        <div className="large-hero_wrapper">
          <div className="large-hero__content">
            <h1>Everything You Need For Your Exam Preparation</h1>
            <p>Online Courses, Practice Question Bank, Mock Test Series, Study Notes, Strategy & Preparation Plans,
                Guidance {"&"} Mentoring and more..</p>
            <a className="btn" href="h">Get Started for Free</a>
          </div>
          <div className="large-hero__image">
            <img src={heroUrl} alt={"Large hero"} />
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Hero;