import React, { Component } from "react";
import Header from "./HeaderComponent";
import Hero from "./HeroComponent";
import Quality from "./QualityComponent";
import Service from "./ServiceComponent";
import Whychoose from "./WhychooseComponent";
import MostTrendingExam from "./MostTrendingExamComponent";
import CurrentAffirs from "./CurrentAffairsComponent";
import MyQbank from "./MyQbankComponent";
import MakeViva from "./MakeVivaComponent";
import Partner from "./PartnerComponent";
import Reviews from "./ReviewsComponent";
import Counter from "./CounterComponent";
import FooterTop from "./FooterTop";
import Footer from "./FooterComponent";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Hero></Hero>
        <Quality></Quality>
        <Service></Service>
        <Whychoose></Whychoose>
        <MostTrendingExam></MostTrendingExam>
        <CurrentAffirs></CurrentAffirs>
        <MyQbank></MyQbank>
        <MakeViva></MakeViva>
        <Partner></Partner>
        <Reviews></Reviews>
        <Counter></Counter>
        <FooterTop></FooterTop>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
export default Home;
