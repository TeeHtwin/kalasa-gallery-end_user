import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ContactUs from "@/components/contactUs/ContactUs";
import { API } from "@/utils/domain";
import { Artwork } from "@/types";

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data: artwork }: { data: Artwork } = await fetch(
    `${API}/api/enduser/artwork/${id}`
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
              url: `/artworks/${id}`,
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
