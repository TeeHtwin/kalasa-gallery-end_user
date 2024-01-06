import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", url: "/", active: true },
          { name: "Our Artists", url: "/artists", active: true },
          {
            name: "Artist Details",
            url: `/artists/${params.id}`,
            active: true,
          },
          { name: "Contact", url: "", active: true },
        ]}
      />
      <ContactUs />
    </>
  );
};
export default page;
