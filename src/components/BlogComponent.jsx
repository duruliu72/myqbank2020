import React, { Component } from 'react';
import Header from "./HeaderComponent";
import BlogContent from "./BlogContentCoponent";
import FooterTop from "./FooterTop";
import Footer from "./FooterComponent";
class Blog extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <BlogContent></BlogContent>
                <FooterTop></FooterTop>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Blog;