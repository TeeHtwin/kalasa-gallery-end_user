import React from "react";
import Title from "../common/Title";
import LinkBtn from "../button/LinkBtn";

interface RelativeLayoutProps {
  dtText?: string;
  mobileText: string;
  href: string;
  title: string;
  children: React.ReactNode;
}
const RelativeLayout = ({
  mobileText,
  dtText,
  href,
  title,
  children,
}: RelativeLayoutProps) => {
  return (
    <div className="lg:mt-[120px] mt-10">
      <div className="flex mb-5 lg:mb-10 justify-between">
        <Title className="text-lg text-primary lg:text-[40px]">{title}</Title>
        {dtText ? (
          <LinkBtn href={href} dtText={`${dtText} →`} mobileText={mobileText} />
        ) : (
          mobileText && <LinkBtn href={href} mobileText={mobileText} />
        )}
      </div>
      {children}
    </div>
  );
};

export default RelativeLayout;
