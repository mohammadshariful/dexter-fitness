import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import facebookImg from "../../../Assets/Images/social-icons/icons8-facebook-30.png";
import githubImg from "../../../Assets/Images/social-icons/icons8-github-30.png";
import googleImg from "../../../Assets/Images/social-icons/icons8-google-30.png";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import "./SocialLogin.css";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);

  useEffect(() => {
    if (user1 || user2 || user3) {
      navigate("/");
    }
  }, [user1, user2, user3]);

  if (loading1 || loading2 || loading3) {
    return <Loading />;
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <span className="centerLine"></span>
        <span>Or</span>
        <span className="centerLine"></span>
      </div>
      {(error1 || error2 || error3) && (
        <p className="error">
          {error1?.message} {error2?.message} {error3?.message}
        </p>
      )}
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={() => signInWithGoogle()} className="social-group">
          <img src={googleImg} alt="" />
          <span>Google</span>
        </button>
        <button onClick={() => signInWithFacebook()} className="social-group">
          <img src={facebookImg} alt="" />
          <span>Facebook</span>
        </button>
        <button onClick={() => signInWithGithub()} className="social-group">
          <img src={githubImg} alt="" />
          <span>Github</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
