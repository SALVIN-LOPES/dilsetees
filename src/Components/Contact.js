import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xa84748",
        "template_lc59jex",
        form.current,
        "N0e8ny8Pij9s_Mes5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!!");
          setIsFormSubmitted(true);
          console.log("isFormSubmitted = ", isFormSubmitted);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Be the first to know!</h1>
        <h1>
          {" "}
          Sign up below to join our exclusive pre-order list for the latest
          t-shirt releases, limited editions, and special discounts.{" "}
        </h1>
        {/* alert message */}
        {isFormSubmitted && (
          <div class="alert alert-success" role="alert">
            You have submitted your email successfully!
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-container">
            <input
              type="email"
              name="user_email"
              placeholder="yourmail@gmail.com"
            />
            <button className="secondary-button" type="submit" value="send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
