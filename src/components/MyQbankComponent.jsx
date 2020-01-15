import React, { Component } from 'react';
import appUrl from "../image/img/apps.jpg";
import qrCodeUrl from "../image/img/qr-codes.png";
import googlePlayUrl from "../image/img/google-play.png";
class MyQbank extends Component {
    state = {}
    render() {
        return (
            <section className="myqb-aps page-section">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-4 col-100">
                            <img src={appUrl} alt="" />
                        </div>
                        <div className="col-8 col-100">
                            <h2 className="headline  myqb-aps__headline">Coming Soon !</h2>
                            <p className="cms_para no-mb">
                                Start your learning journey with Myqbank.
                  </p>
                            <p className="cms_para  no-mb no-mt">
                                Download the app for FREE now.
                  </p>
                            <p className="cms_para no-mt">
                                Stay update for your next big exam.
                  </p>
                            <div className="myqb-aps__wrapper">
                                <div className="myqb-aps__qrcode">
                                    <img src={qrCodeUrl} alt="" />
                                </div>
                                <div className="myqr-aps__download-icon">
                                    <img src={googlePlayUrl} alt="" />
                                </div>
                            </div>
                            <div className="myqr-aps__getlink">
                                <form action="" method="post">
                                    <div className="form-grup">
                                        <select name="" id="">
                                            <option value="">008</option>
                                        </select>
                                        <input type="text" placeholder="Your mobile Number" />
                                        <button>Get Link</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MyQbank;