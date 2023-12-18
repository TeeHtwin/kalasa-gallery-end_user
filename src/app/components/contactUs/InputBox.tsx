import React, { forwardRef } from "react";
import { cn } from "@/app/lib/utils";

interface InputBoxProps {
  placeholder: string;
  className?: string;
  name?: string;
  type: string;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ placeholder, type, name, className }, ref) => {
    return (
      <input
        className={cn(
          "focus:outline-none focus:ring-[0.5px] focus:ring-primary lg:h-[58px] bg-transparent border text-primary placeholder:text-primary border-primary pl-4 py-3 h-10 w-full",
          className
        )}
        type={type}
        name={name}
        required
        ref={ref}
        placeholder={placeholder}
      />
    );
  }
);

export default InputBox;
