"use client";
import React, { useEffect, useRef } from "react";
import InputBox from "./InputBox";
import SubmitBtn from "./SubmitBtn";

const Form = ({message}: {message: string}) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  let messageRef = useRef(null);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Access the input values using refs
    const nameValue = nameRef.current;
    const emailValue = emailRef.current;
    const messageValue = messageRef.current;

    // Handle the form submission logic here
    console.log("Form submitted with data:", {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    });
    nameRef.current = null;
    emailRef.current = null;
    messageRef.current = null;

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
        placeholder=''
        className="lg:pr-[427px] w-full pt-5 pb-[134px]"
      />
      <SubmitBtn>Send Message</SubmitBtn>
    </form>
  );
};

export default Form;
