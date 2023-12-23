import React from "react";

const Loading = () => {
  return (
    <div className="fixed w-screen h-screen z-30 inset-0 bg-primary-light grid place-items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
