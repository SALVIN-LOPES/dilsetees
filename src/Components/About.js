import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/new_assets/tshirts/angry_wolf.svg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Unleash Your Creativity with Our Custom T-Shirt Platform
        </h1>
        <p className="primary-text">
          We believe that fashion should be a personal expression, and that's
          why we've created a platform that allows you to design and customize
          your own t-shirts effortlessly.
        </p>
        <p className="primary-text">
          At <strong className="about-strong">dilsetees</strong>, we are
          passionate about providing you with the tools and resources to create
          one-of-a-kind garments that reflect your personality, interests, and
          individuality. Whether you're an artist, a fashion enthusiast, or
          simply someone looking to add a personal touch to their wardrobe,
          we've got you covered.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
