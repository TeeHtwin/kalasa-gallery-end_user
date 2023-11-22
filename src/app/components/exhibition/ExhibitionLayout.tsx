import React from "react";
import Layout from "../common/Layout";

const ExhibitionLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout className="lg:py-20">{children}</Layout>;
};

export default ExhibitionLayout;
