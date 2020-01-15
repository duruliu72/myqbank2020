import React, { Component } from 'react';
import { Link } from "react-router-dom";
import blog1Url from "../image/img/blog/blog1.jpg";
import blog2Url from "../image/img/blog/blog2.png";
import blog3Url from "../image/img/blog/blog3.jpg";
import blog4Url from "../image/img/blog/blog4.jpg";
import blog5Url from "../image/img/blog/blog5.jpg";
import blog6Url from "../image/img/blog/blog6.png";
class BlogContent extends Component {
    blogcats = [
        { blogcatid: 0, category: "All" },
        { blogcatid: 1, category: "Upcomming" },
        { blogcatid: 2, category: "ADMISSTION" },
        { blogcatid: 3, category: "BANK" },
        { blogcatid: 4, category: "BCS" },
        { blogcatid: 5, category: "GOVT JOB" },
        { blogcatid: 6, category: "NON GOVT JOB" },
        { blogcatid: 7, category: "PRIMARY TEACHER" }
    ];;
    blogs = [
        { blogid: 1, blogcatid: 1, a_data: "১০১", userName: "Fardin Islam", imgUrl: blog1Url },
        { blogid: 2, blogcatid: 3, a_data: "১০১", userName: "Fardin Islam", imgUrl: blog2Url },
        { blogid: 3, blogcatid: 2, a_data: "১০১", userName: "Fardin Islam", imgUrl: blog3Url },
        { blogid: 4, blogcatid: 1, a_data: "১০১", userName: "Fardin Islam", imgUrl: blog4Url },
        { blogid: 5, blogcatid: 5, a_data: "১০১", userName: "Fardin Islam", imgUrl: blog5Url },
        { blogid: 6, blogcatid: 7, a_data: "১০১", userName: "Fardin Islam", imgUrl: blog6Url }
    ];
    constructor(props) {
        super(props);
        this.state = {
            blogs: this.blogs
        }
    }
    catSelector(cat) {
        var tempblogs = this.blogs;
        if (cat.blogcatid !== 0) {
            tempblogs = this.blogs.filter(blog => {
                return blog.blogcatid === cat.blogcatid;
            });
        }
        this.setState({
            blogs: tempblogs
        });
    }
    render() {
        return (
            <section className="myqb-pages page-section">
                <div className="wrapper">
                    <div className="blog-filter">
                        <ul>
                            {this.blogcats.map((cat) => (<li key={cat.blogcatid} onClick={() => { this.catSelector(cat) }}>{cat.category}</li>))}
                        </ul>
                    </div>
                    <div className="blog-wrapper">
                        {this.state.blogs.map((blog) => (<div key={blog.blogid} className="blog-item">
                            <div className="blog-img">
                                <Link to={`/post/${blog.blogid}`}><img src={blog.imgUrl} alt="" /></Link>
                            </div>
                            <div className="blog-note">
                                <Link to={`/post/${blog.blogid}`}>{blog.a_data}</Link>
                                <p><span><i className="fa fa-user" aria-hidden="true"></i></span>{blog.userName}</p>
                            </div>
                        </div>))}
                    </div>
                </div>
            </section>
        );
    }
}
export default BlogContent;