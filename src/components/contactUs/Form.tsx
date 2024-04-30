"use client";

import InputBox from "./InputBox";
import SubmitBtn from "./SubmitBtn";
import { useFormState } from "react-dom";
import { submitInquire } from "@/app/lib/action";
import clsx from "clsx";
import { useRef } from "react";
import { useEffect } from "react";

const Form = (autoFill: { message: string | undefined }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(submitInquire, initialState);

  useEffect(() => {
    if (formRef.current && state.status) {
      formRef.current.reset();
    }
  }, [state.status]);

  return (
    <form className="mt-12 flex flex-col gap-4" action={dispatch} ref={formRef}>
      <input
        id="name"
        type="text"
        name="name"
        defaultValue=""
        placeholder="Your Name ..."
        aria-describedby="name-error"
        className="focus:outline-none focus:ring-[0.5px] focus:ring-primary lg:h-[58px] bg-transparent border text-primary placeholder:text-primary border-primary pl-4 py-3 h-10 w-full"
      />
      <div id="name-error" aria-live="polite" aria-atomic="true">
        {state.errors?.name &&
          state.errors?.name.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <input
        type="email"
        name="email"
        aria-describedby="email-error"
        placeholder="Your Email ..."
        className="focus:outline-none focus:ring-[0.5px] focus:ring-primary lg:h-[58px] bg-transparent border text-primary placeholder:text-primary border-primary pl-4 py-3 h-10 w-full"
      />
      <div id="email-error" aria-live="polite" aria-atomic="true">
        {state.errors?.email &&
          state.errors?.email.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <textarea
        name="message"
        rows={7}
        defaultValue={clsx(autoFill && !state.status ? autoFill.message : "")}
        className="focus:outline-none focus:ring-[0.5px] focus:ring-primary bg-transparent border text-primary placeholder:text-primary border-primary pl-4 py-3 "
        aria-describedby="message"
      />
      <div id="email-error" aria-live="polite" aria-atomic="true">
        {state.errors?.inputMessage &&
          state.errors?.inputMessage.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>

      <div>
        {state.errors && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
      </div>
      <SubmitBtn type="submit">Send Message</SubmitBtn>
    </form>
  );
};

export default Form;
