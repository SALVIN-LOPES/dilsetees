import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Customers Say About Us</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          "I absolutely love the custom t-shirts I ordered from dilsetees! The
          quality is top-notch, and the printing of my design turned out even
          better than I imagined. Plus, the customer service was exceptional.
          Highly recommend!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Sarah Barlowe</h2>
      </div>

    </div>
  );
};

export default Testimonial;
