import React from "react";
import "./Banner.css";
const Banner = () => {
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
            <button type="button" className="btn-link">
              Get Started
            </button>
            <button type="button" className="btn-link">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
