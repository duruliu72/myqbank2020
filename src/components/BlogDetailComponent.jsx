import React, { Component } from 'react';
import Header from "./HeaderComponent";
import FooterTop from "./FooterTop";
import Footer from "./FooterComponent";
import blog8Url from "../image/img/blog/blogdetails/blog8.png";
class BlogDetail extends Component {
    state = {}
    handleSave() {
        // this.props.history.push("/blog");
        this.props.history.replace("/blog");
    }
    render() {
        // console.log(this.props.match.params.id);
        return (
            <React.Fragment>
                <Header></Header>
                <section className="blog-details page-section">
                    <div className="wrapper">
                        <div className="row1">
                            <div className="col1-8">
                                <div className="blog-details-wrapper">
                                    <div className="blog_feature-img">
                                        <img src={blog8Url} alt="" />
                                    </div>
                                    <div className="blog_feature-heading">
                                        <div className="blog-dtl-btn">
                                            <a href="f">পড়াশুনা ১০১</a>
                                        </div>
                                        <div className="blog-cat-btn">
                                            <a className="btn" href="h">পড়াশোনার টিপস</a>
                                        </div>
                                        <button onClick={() => { this.handleSave() }}>Save</button>
                                    </div>
                                    <div className="blog_feature-txt">
                                        <p>স্কুলে থাকতে এক টিচারের বাসায় প্রাইভেট পড়তাম, ফিজিক্স। স্যার অনেক ভালো ছিলো, পড়াতেনও
                                            বেশ। তিনি প্রায় প্রতিদিনই ক্লাস শেষে বলতেন “আজকে যা পড়ানো হলো, বাসায় গিয়ে ৫মিনিটের
                                            জন্য হলেও তা রিভাইস করবা, কেমন?” আমাদের হরহামেশাই তো শিক্ষকেরা এসব কথা বলেন, কিন্তু আমরা
                                            কয়জনই সেই ছোটবেলার “পড়ার সময় পড়া, খেলার সময় খেলা”- এই আদর্শ মেনে চলি? ২-১ জন বাদে
                                            আমাদের প্রত্যেকেরই টনক নড়ে পরীক্ষার ৭-৮ দিন আগে, অনেকের ক্ষেত্রে তো সময়টা পরীক্ষার আরো
                                            কাছে। আমাদের সবার এই অবস্থা দেখে স্যার একদিন বলেছিলেন, “দোষটা কিন্তু সম্পূর্ণ তোমাদের
                                    না। বাকি দিনগুলোর চেয়ে পরীক্ষার আগের রাতেই কিন্তু আমরা সবচেয়ে বেশি জিনিস শিখি।”</p>
                                        <p>স্যারের কথাটা কিন্তু ১০০ ভাগ সত্য। যেই টপিক আমি গত ১০-১২ দিন মাথার চুল ছিঁড়ে ফেলেও
                                            মাথায় ঢুকাতে পারিনি, সেই একই টপিক পরীক্ষার আগের রাতে নিমিষেই বুঝে ফেলি এবং পরবর্তীতে
                                            মনে হয়, “এত সহজ একটা টপিক এতদিন বুঝতে পারিনি? পরবর্তীতে আর এমনটা করা যাবেনা একদম।” এবং
                                            প্রতিবারই আমাদের একই ভুলটা হয়। তুমি যদি মনে করে থাকো, পরীক্ষার আগের রাতেই সম্পূর্ণ
                                            সিলেবাস কভার করে একদম সেইরকম কিছু একটা করে ফেলাটা খুব বাস্তব ও একই সাথে সম্ভব, তা কিন্তু
                                            পুরোটাই ভুল। পরীক্ষার আগের রাতে হয়তো অনেক কিছুই দ্রুতই মাথায় ঢুকে, কিন্তু সেসব জ্ঞান
                                            কতটা টেকসই হবে, তা নিয়ে কিন্তু বিরাট সন্দেহ আছে। পরীক্ষার আগে কিংবা পুরো সেমিস্টার
                                    জুড়ে সিলেবাস শেষ করার টেনশন দূর করার উপায় কী তাহলে?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col1-4">
                                <div className="blog-sidebar">
                                    <div className="blog-category">
                                        <h2 className="sidebar-heading">আমাদের সেকশনসমূহ</h2>
                                        <select name="" id="">
                                            <option value="">Select Category</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterTop></FooterTop>
                <Footer></Footer>
            </React.Fragment>

        );
    }
}
export default BlogDetail;