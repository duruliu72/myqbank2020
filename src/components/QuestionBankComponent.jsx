import React, { Component } from 'react';
import Header from "./HeaderComponent";
import QuestionBankConponent from "./QuestionBankContentCoponent";
import FooterTop from "./FooterTop";
import Footer from "./FooterComponent";
class QuestionBank extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <QuestionBankConponent></QuestionBankConponent>
                <FooterTop></FooterTop>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default QuestionBank;