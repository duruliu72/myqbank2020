import React, { Component } from 'react';
import Header from "./HeaderComponent";
class NotFound extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <h1 style={{ textAlign: "center" }}>Not Found</h1>
            </React.Fragment>
        );
    }
}

export default NotFound;