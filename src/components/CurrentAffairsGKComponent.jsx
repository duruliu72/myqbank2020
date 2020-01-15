import React, { Component } from 'react';
import Header from "./HeaderComponent";
import CurrentAffairsGKContent from "./CurrentAffairsGKContentComponent";
import FooterTop from "./FooterTop";
import Footer from "./FooterComponent";
class CurrentAffairsGK extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <CurrentAffairsGKContent></CurrentAffairsGKContent>
                <FooterTop></FooterTop>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default CurrentAffairsGK;