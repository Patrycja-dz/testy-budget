import React from "react";

function Contact() {
  return (
    <>
      <h2 className="heading">Contact</h2>
      <form className="form ">
        <fieldset className="form__fieldset">
          <h3>Inquiries</h3>
          <p>
            <label for="name" className="form__label">
              <span>Name</span>
              <input type="text" id="name" />
            </label>
          </p>
          <p>
            <label for="email" className="form__label">
              <span>Email</span>
              <input type="text" id="email" />
            </label>
          </p>
          <p>
            <label for="subject" className="form__label">
              <span>Subject</span>
              <input type="text" id="subject" />
            </label>
          </p>
          <p>
            <label for="message" className="form__label">
              <span>Message</span>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </label>
          </p>
        </fieldset>
        <button className="form__button">Send</button>
      </form>
    </>
  );
}

export default Contact;
