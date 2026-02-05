// @ts-nocheck
"use client";

import SubmitBtn from "./SubmitBtn";
import { useActionState, useRef, useEffect, useState } from "react";
import { submitInquire } from "@/app/lib/action";
import clsx from "clsx";
import toast from "react-hot-toast";
import Script from "next/script";

const Form = (autoFill: {
  message: string | undefined;
  artworkName: string | undefined | null;
}) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const formRef = useRef<HTMLFormElement>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const initialState = {
    message: autoFill.artworkName
      ? `Contact for ${autoFill.artworkName}, `
      : "",
    errors: {},
  };

  // 2. Renamed to useActionState.
  // Added 'isPending' as the 3rd return value.
  const [state, dispatch, isPending] = useActionState(
    submitInquire,
    initialState,
  );

  useEffect(() => {
    if (formRef.current && state.status) {
      toast.success("Successfully send message");
      formRef.current.reset();
      setCaptchaToken("");
    }
  }, [state.status]);

  useEffect(() => {
    if (!siteKey) return;
    if (window?.grecaptcha?.ready) {
      window.grecaptcha.ready(() => setCaptchaReady(true));
    }
  }, [siteKey]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!siteKey) return;
    if (!window?.grecaptcha?.execute) return;
    if (captchaToken) return;

    event.preventDefault();
    const token = await window.grecaptcha.execute(siteKey, {
      action: "contact",
    });
    setCaptchaToken(token);
    const form = formRef.current;
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
        onLoad={() => {
          if (window?.grecaptcha?.ready) {
            window.grecaptcha.ready(() => setCaptchaReady(true));
          }
        }}
      />
      <form
        className="mt-12 flex flex-col gap-4"
        action={dispatch}
        ref={formRef}
        onSubmit={handleSubmit}
      >
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

        <input type="hidden" name="recaptchaToken" value={captchaToken} />
        <div>
          {!siteKey && (
            <p className="mt-2 text-sm text-red-500">
              reCAPTCHA is not configured.
            </p>
          )}
          {state.errors?.recaptcha &&
            state.errors?.recaptcha.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* You can now pass isPending to your button if you want to disable it while loading */}
        <SubmitBtn type="submit" disabled={isPending || !captchaReady}>
          {isPending ? "Sending..." : "Send Message"}
        </SubmitBtn>
      </form>
    </>
  );
};

export default Form;
