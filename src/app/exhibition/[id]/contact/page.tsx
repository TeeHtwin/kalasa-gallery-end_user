import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Our Events", url: "/events" },
          { name: "Event Details", url: `/events/${params.id}` },
          { name: "Contact", url: "" },
        ]}
      />
      <ContactUs />
    </>
  );
};
export default page;
