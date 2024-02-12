import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";
import React from "react";

type Props = {};

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="wrapper px-4 sm:px-20">
        <Breadcrumb
          items={[
            { name: "Home", url: "/", active: true },
            { name: "Our Events", url: "/events", active: true },
            {
              name: "Event Details",
              url: `/events/${params.id}`,
              active: true,
            },
            { name: "Contact", url: "", active: false },
          ]}
        />
      </div>
      <ContactUs />
    </>
  );
};

export default page;
