import React from "react";
import Layout from "../common/Layout";
import Title from "../common/Title";
import Paragraph from "../common/Text/Paragraph";
import IconText from "./IconText";
import phonIcon from "@/../public/ContactUsIcon/Phone icon.svg";
import mailIcon from "@/../public/ContactUsIcon/Email icon.svg";
import locationIcon from "@/../public/ContactUsIcon/Location icon.svg";
import clockIcon from "@/../public/ContactUsIcon/Clock icon.svg";
import InputBox from "./InputBox";
import SocialLink from "./SocialLink";
import Form from "./Form";

const ContactUs = () => {
  return (
    <Layout className="lg:p-0 p-0 pt-10 grid grid-cols-1 lg:grid-cols-2">
      <div
        id="contact"
        className="lg:py-[120px] px-4 w-full lg:w-[647px]  mx-auto"
      >
        <Title className="text-xl mb-4 lg:text-5xl text-primary">
          Contact Us
        </Title>
        <Paragraph>
          Feel Free to contact us anytime.
          <span className="block">
            Feel Free to contact us anytime. We will get back to you as soon as
            we can !
          </span>
        </Paragraph>
        <Form />
      </div>
      <div className="flex pl-4 lg:pl-0 flex-col">
        <div className="h-[83px] lg:h-[230px] flex justify-center items-center ml-auto w-[216px] lg:w-[403px] bg-primary-light">
          <Title className="text-3xl lg:text-5xl text-primary">Info</Title>
        </div>
        <div className="lg:py-[60px] py-10 lg:pl-12 lg:pr-20 bg-primary pl-8 pr-5 flex gap-5 lg:gap-12 flex-col ">
          <IconText
            icon={phonIcon}
            href="tel:+959
          425285590"
            text="+959 425285590"
          />
          <IconText
            icon={mailIcon}
            text="kalasaartspace@gmail.com"
            href="mailto:kalasaartspace@gmail.com"
          />
          <IconText
            icon={locationIcon}
            text="No. 91-93, 1st floor (left), Seikkantha Street (Middle Block), Kyauktada Township, Yangon."
            href="https://maps.app.goo.gl/py3Wb3H1DSEL6Rj9A"
          />
          <IconText
            icon={clockIcon}
            href="https://maps.app.goo.gl/py3Wb3H1DSEL6Rj9A"
            text="Wed to Sun 10:00 AM to 6:00 PM"
          />
        </div>
        <div className="h-[83px] lg:h-[230px] flex pb-3 lg:pb-10 justify-center ml-auto w-[216px] lg:w-[403px] bg-primary-light">
          <SocialLink />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
