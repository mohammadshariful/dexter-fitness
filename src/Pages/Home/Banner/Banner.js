import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/login");
  };
  return (
    <section className="banner-container">
      <div className="banner-wraper">
        <div className="banner-content">
          <h1>Your Personal Trainer is Here...</h1>
          <p>
            Find affordable personal trainers worldwide and get personalized
            training in the palm of your hand.
          </p>
          <div className="btn-container">
            <button onClick={handleBtn} type="button" className="btn-link">
              Get Started
            </button>
            <button onClick={handleBtn} type="button" className="btn-link">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
