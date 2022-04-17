import React from "react";
import { Container } from "react-bootstrap";
import { FaComment, FaThumbsUp } from "react-icons/fa";
import author from "../../Assets/Images/author-img.jpg";
import "./Blogs.css";
const Blogs = () => {
  return (
    <Container className=" my-5 p-3">
      <article className="blog">
        <h4 className="fw-bolder mb-3">
          Title :Difference between authorization and authentication
        </h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src="" alt="" />
          <p className="text-start my-3">authoraization</p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={author} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-muted px-3">Mar 30. 5 min read</p>
          <p className="text-muted px-3">
            <span className="me-2">
              <FaThumbsUp /> <small>1027</small>
            </span>
            <span className="ms-2">
              <FaComment /> <small>40</small>
            </span>
          </p>
        </div>
      </article>
      <article className="blog">
        <h4 className="fw-bolder mb-3">
          Title : Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src="{semanticTagImg}" alt="" />
          <p className="text-start my-3">implement of firebase</p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={author} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-muted px-3">Apr 8. 7 min read</p>
          <p className="text-muted px-3">
            <span className="me-2">
              <FaThumbsUp /> <small>567</small>
            </span>
            <span className="ms-2">
              <FaComment /> <small>28</small>
            </span>
          </p>
        </div>
      </article>
      <article className="blog">
        <h4 className="fw-bolder mb-3">
          Title : What other services does firebase provide other than
          authentication?
        </h4>
        <div className="px-3">
          <img className="blog-img img-fluid" src="{blockInlineImg}" alt="" />
          <p className="text-start my-3">firebase services</p>
        </div>
        <div className="d-flex align-items-center px-3">
          <img className="author-img" src={author} alt="" />
          <h6 className="ms-2">Mohammad Shariful</h6>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-muted px-3">June 20. 10 min read</p>
          <p className="text-muted px-3">
            <span className="me-2">
              <FaThumbsUp /> <small>987</small>
            </span>
            <span className="ms-2">
              <FaComment /> <small>20</small>
            </span>
          </p>
        </div>
      </article>
    </Container>
  );
};

export default Blogs;
