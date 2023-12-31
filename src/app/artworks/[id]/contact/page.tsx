import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Our Artworks", url: "/artworks" },
          { name: "Artwork Details", url: `/artworks/${params.id}` },
          { name: "Contact", url: "" },
        ]}
      />
      <ContactUs />
    </>
  );
};
export default page;
