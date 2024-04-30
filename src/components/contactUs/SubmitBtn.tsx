"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SubmitBtn = ({ children, className, ...rest }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx("w-full py-3 bg-primary text-center text-white text-xs lg:text-lg font-medium lg:py-[18px]",
      className,
      )}
      disabled={pending}
      {...rest}
    >
      {children}
    </button>
  );
};

SubmitBtn.displayName = "SubmitBtn";

export default SubmitBtn;
