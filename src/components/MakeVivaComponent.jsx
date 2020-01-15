import React, { Component } from 'react';
import makeVivaUrl from "../image/img/makeviva.png";
class MakeViva extends Component {
    state = {}
    render() {
        return (
            <section className="current-affairs">
                <div className="wrapper">
                    <div className="row">
                        <div className="current-affairs__logo">
                            <img src={makeVivaUrl} alt="" />
                        </div>
                        <div className="current-affairs__content viva-easy pd">
                            <h2 className="headline current-affairs__headline">
                                Make Your Viva Easy
                </h2>
                            <p>Preparing for a Viva Voce without fear!</p>
                        </div>
                        <div className="current-affairs__btn pd cpt">
                            <a className="btn btn-color" href="viva.html">
                                Start Preparation
                </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MakeViva;