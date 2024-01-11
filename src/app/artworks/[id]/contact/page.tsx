'use client'


import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import ContactUs from "@/app/components/contactUs/ContactUs";
import { useSearchParams } from 'next/navigation';



const Page = ({ params }: { params: { id: string } }) => {


  const searchParams = useSearchParams();
  const title = searchParams.get('name')
  const message = `Hi, pls let me know about this ${title}Art. I'm interested!`
  
  return (
    <>
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
      <ContactUs message={message}/>
    </>
  );
};
export default Page;
