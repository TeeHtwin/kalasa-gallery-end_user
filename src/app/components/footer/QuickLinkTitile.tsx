import React from "react";

const QuickLinkTitile = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm mb-5 text-white uppercase font-medium lg:text-lg fontinter lg:font-semibold">
      {children}
    </p>
  );
};

export default QuickLinkTitile;
