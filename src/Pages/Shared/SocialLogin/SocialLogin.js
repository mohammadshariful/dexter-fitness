import React from "react";
import facebookImg from "../../../Assets/Images/social-icons/icons8-facebook-30.png";
import githubImg from "../../../Assets/Images/social-icons/icons8-github-30.png";
import googleImg from "../../../Assets/Images/social-icons/icons8-google-30.png";
import "./SocialLogin.css";
const SocialLogin = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <span className="centerLine"></span>
        <span>Or</span>
        <span className="centerLine"></span>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="social-group">
          <img src={googleImg} alt="" />
          <span>Google</span>
        </button>
        <button className="social-group">
          <img src={facebookImg} alt="" />
          <span>Facebook</span>
        </button>
        <button className="social-group">
          <img src={githubImg} alt="" />
          <span>Github</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
