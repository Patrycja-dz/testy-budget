import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Contact() {
  const navigate = useNavigate();

  let schema = yup
    .object({
      user: yup.string().min(3).required(),
      email: yup.string().email("Email is invalid").required(),
      subject: yup.string().optional(),
      message: yup.string().optional(),
    })
    .required();

  const {
    register,
   handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");
  const [success, setSuccess] = useState(false);


  const submit = async () => {
   // e.preventDefault();
    try {
      const response = await axios.post(
        "https://httpbin.org/post",
        JSON.stringify({ name, email, subject, message }),
        {
          headers: { "Context-Type": "application/json" },
          withCredentials: true,
        }
      );   
      //console.log(response.data);
      //console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setIsError("No server response");
      } else {
        setIsError("Send message failed");
      }
    }
  };
  return (
    <>
      {success ? (
        <section>
          <h1>Successs</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Return to Home
          </button>
        </section>
      ) : (
        <section>
          <h2 className="heading">Contact</h2>

          <div className="contact-container">
            <form className="form" onSubmit={handleSubmit(submit)}>
              <fieldset className="form__fieldset">
                <h3 className="form__title">Inquiries</h3>
                <p>
                  <label htmlFor="name" className="form__label">
                    <span>Name</span>
                    <input
                      type="text"
                      id="name"
                      className="form__field"
                      {...register("user")}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="off"
                    />

                    <p>{errors.user?.message}</p>
                  </label>
                </p>
                <p>
                  <label htmlFor="email" className="form__label">
                    <span>Email</span>
                    <input
                      type="text"
                      id="email"
                      className="form__field"
                      {...register("email")}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="off"
                    />
                    <p>{errors.email?.message}</p>
                  </label>
                </p>
                <p>
                  <label htmlFor="subject" className="form__label">
                    <span>Subject</span>
                    <input
                      type="text"
                      id="subject"
                      className="form__field"
                      {...register("subject")}
                      onChange={(e) => setSubject(e.target.value)}
                      autoComplete="off"

                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="message" className="form__label">
                    <span>Message</span>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      className="form__field textarea"
                      {...register("message")}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </label>
                </p>
              </fieldset>
              <button id="contact-btn"
                disabled={
                  !name || !email|| !subject || !message ? true : false 
                }
              >
                Send
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
