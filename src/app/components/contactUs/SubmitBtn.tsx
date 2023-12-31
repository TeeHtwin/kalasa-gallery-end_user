import React, { forwardRef, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const SubmitBtn = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <button
      ref={ref}
      className="w-full py-3 bg-primary text-center text-white text-xs lg:text-lg font-medium lg:py-[18px]"
      {...rest}
    >
      {children}
    </button>
  );
});

SubmitBtn.displayName = "SubmitBtn";

export default SubmitBtn;
