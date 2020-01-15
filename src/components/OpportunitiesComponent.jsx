import React, { Component } from 'react';
import Header from "./HeaderComponent";
import OpportunitiesContent from "./OpportunitiesContentComponent";
import FooterTop from "./FooterTop";
import Footer from "./FooterComponent";
class Opportunities extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <OpportunitiesContent></OpportunitiesContent>
                <FooterTop></FooterTop>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Opportunities;