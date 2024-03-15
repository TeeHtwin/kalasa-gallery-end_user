import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";
import { useSearchParams } from "next/navigation";
import { API } from "@/utils/domain";
import { Artwork } from "@/types";
import data from "@/data";


const Page = async({ params }: { params: { id: string } }) => {
  const { data: artwork }: { data: Artwork } = await fetch(
    `${API}/api/enduser/artwork/${params?.id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log("artwork detail error", error));

  
  
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
      <ContactUs name={artwork.name} />
    </>
  );
};
export default Page;
