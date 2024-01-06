import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Our Events", url: "/events", active: true },
          { name: "Event Details", url: `/events/${params.id}`, active: true },
          { name: "Contact", url: "", active: false },
        ]}
      />
      <ContactUs />
    </>
  );
};
export default page;
