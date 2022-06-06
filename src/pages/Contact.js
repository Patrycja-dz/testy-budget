import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Contact() {
  let navigate = useNavigate();

  let schema = yup
    .object({
      user: yup.string().required(),
      email: yup.string().email("Email is invalid").required(),
      subject: yup.string(),
      message: yup.string(),
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
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const submitData = () => {
    setIsError(false)
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    axios
      .post("https://httpbin.org/post", data)
      .then((res) => {
        setData(res.data);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        console.log("data was submit")
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return (
    <>
      <h2 className="heading">Contact</h2>

      <div className="contact-container">
        <form
          className="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <fieldset className="form__fieldset">
            <h3 className="form__title">Inquiries</h3>
            <p>
              <label for="name" className="form__label">
                <span>Name</span>
                <input
                  type="text"
                  id="name"
                  className="form__field"
                  {...register("user")}
                  onChange={e=> setName(e.target.value)}
                />

                <p>{errors.userName?.message}</p>
              </label>
            </p>
            <p>
              <label for="email" className="form__label">
                <span>Email</span>
                <input
                  type="text"
                  id="email"
                  className="form__field"
                  {...register("email")}
                  onChange={e=> setEmail(e.target.value)}
                />
                <p>{errors.email?.message}</p>
              </label>
            </p>
            <p>
              <label for="subject" className="form__label">
                <span>Subject</span>
                <input
                  type="text"
                  id="subject"
                  className="form__field"
                  {...register("subject")}
                  onChange={e=> setSubject(e.target.value)}
                />
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
                  className="form__field textarea"
                  {...register("message")}
                  onChange={e=> setMessage(e.target.value)}
                ></textarea>
              </label>
            </p>
          </fieldset>
          <button
             onClick={submitData}
          // className="form__button"
          // onClick={() => {
          //   navigate("/");
          // }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
