"use client";

import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";
import { useSearchParams } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="wrapper px-4 sm:px-20">
        <Breadcrumb
          items={[
            { name: "Home", url: "/", active: true },
            { name: "Our Artworks", url: "/artworks", active: true },
            {
              name: "Artwork Details",
              url: `/artworks/${params.id}`,
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
export default Page;
