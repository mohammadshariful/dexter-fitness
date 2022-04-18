import React from "react";
import { Container } from "react-bootstrap";
import { FaComment, FaThumbsUp } from "react-icons/fa";
import author from "../../Assets/Images/author-img.jpg";
import authenticationVsAuthoraization from "../../Assets/Images/blogs/authorization vs authentication.png";
import firebase from "../../Assets/Images/blogs/firebase.png";
import firebaseServices from "../../Assets/Images/blogs/usesFirebase.jpeg";
import "./Blogs.css";

const Blogs = () => {
  return (
    <Container className=" my-5 p-3">
      <article className="blog">
        <h4 className="fw-bolder mb-3">
          Title :Difference between authentication and authorization
        </h4>
        <div className="px-3">
          <img
            className="blog-img img-fluid"
            src={authenticationVsAuthoraization}
            alt=""
          />
          <div className="text-start my-3">
            <h5>Authentication</h5>
            <ul>
              <li>Authentication verifies who the user is.</li>
              <li>
                Authentication is visible to and partially changeable by the
                user.
              </li>
              <li>
                Authentication is the first step of a good identity and access
                management process.
              </li>
            </ul>
            <h5>Authorization</h5>
            <ul>
              <li>
                Authorization determines what resources a user can access.
              </li>
              <li>Authorization isn't visible to or changeable by the user.</li>
              <li>Authorization always takes place after authentication.</li>
            </ul>
          </div>
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
          <img className="blog-img img-fluid" src={firebase} alt="" />
          <div className="text-start my-3">
            <p>
              Firebase is used for many purposes that can help your apps to
              develop, grow and make it a quality app. There are so many option
              authentication without firebase. as like
            </p>
            <ul>
              <li>Back4app </li>
              <li>Kinvey </li>
              <li>Parse </li>
              <li>Pubnub </li>
              <li>Backendless </li>
              <li>Heroku </li>
              <li>Appwrite </li>
              etc...
            </ul>
          </div>
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
          <img className="blog-img img-fluid" src={firebaseServices} alt="" />
          <div className="text-start my-3">
            <p>
              Firebase is Backedn service platform by Google that provides.It
              have to mayny functionalities and helps with the backend
              development of Android,iOS,web.
            </p>
            <h5>There are top functionalites here...</h5>
            <p>
              <b>Firebase Database:</b> used to store users data ,user details,
              and other metadata.
            </p>
            <p>
              <b>Firebase Cloud Storage:</b> used to store user-generated
              content like the profile picture,multimedia messages etc.
            </p>
            <p>
              <b>Firebase Cloud Messaging:</b> used to send notification
            </p>
            <p>
              <b>Firebase Remote Config:</b> used to perform A/B testing on the
              go
            </p>
          </div>
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
