import React from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
function Contact() {
  let navigate = useNavigate();

  let schema = yup.object({
    user: yup.string().required(),
    email: yup.string().email("Email is invalid").required(),
    subject: yup.string(),
    message: yup.string(),
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });


  return (
    <>
      <h2 className="heading">Contact</h2>

      <div className="contact-container">
        <form className="form" onSubmit = {handleSubmit((data)=>{
          console.log(data)
        })}>
          <fieldset className="form__fieldset">
            <h3 className="form__title">Inquiries</h3>
            <p>
              <label for="name" className="form__label">
                <span>Name</span>
                <input type="text" id="name" className="form__field" {...register("user")}/>
                <p>{errors.userName?.message}</p>
              </label>
            </p>
            <p>
              <label for="email" className="form__label">
                <span>Email</span>
                <input type="text" id="email" className="form__field" {...register("email")}/>
                <p>{errors.email?.message}</p>
              </label>
            </p>
            <p>
              <label for="subject" className="form__label">
                <span>Subject</span>
                <input type="text" id="subject" className="form__field" {...register("subject")}/>
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
                ></textarea>
              </label>
            </p>
          </fieldset>
          <button
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
