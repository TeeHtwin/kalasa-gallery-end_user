"use client";
import React, { useRef } from "react";
import InputBox from "./InputBox";
import SubmitBtn from "./SubmitBtn";

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the input values using refs
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const messageValue = messageRef.current.value;

    // Handle the form submission logic here
    console.log("Form submitted with data:", {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    });
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    // You can perform further actions like sending data to a server
  };

  return (
    <form className="mt-12 flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputBox
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Your Name ..."
      />
      <InputBox
        ref={emailRef}
        type="email"
        name="email"
        placeholder="Your Email ..."
      />
      <InputBox
        ref={messageRef}
        type="text"
        name="message"
        placeholder="Your Message Here ..."
        className="lg:pr-[427px] w-full pt-5 pb-[134px]"
      />
      <SubmitBtn>Send Message</SubmitBtn>
    </form>
  );
};

export default Form;
