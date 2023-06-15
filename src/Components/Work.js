import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

// -------------material ui icons --------------------
import ColorLensIcon from "@mui/icons-material/ColorLens";

// -------------actual icons --------------------
import chooseColor from "../Assets/new_assets/icons/choose_color.png";
import Magic from "../Assets/new_assets/icons/magic.png";
import FastDelivery from "../Assets/new_assets/icons/fast-delivery.png";

const Work = () => {
  const workInfoData = [
    {
      image: chooseColor,
      title: "Choose color",
      text: "We provide detailed color garments, accurate product images, and a user-friendly interface to help you make confident decisions.",
    },
    {
      image: Magic,
      title: "Magic",
      text: "Now this is the phase where you can create customized tees",
    },
    {
      image: FastDelivery,
      title: "Fast Deliveries",
      text: "Need your custom t-shirts in a hurry? We've got you covered with our lightning-fast delivery service! At dilsetees, we understand that time is of the essence when it comes to receiving your personalized garments",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
