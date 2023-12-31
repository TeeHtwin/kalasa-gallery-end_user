import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb"
import ContactUs from "@/app/components/contactUs/ContactUs"


const page = ({params}: { params: { id:string }}) => {
  return (
    <>
      <Breadcrumb items={[
        {name: 'Home', url: '/'},
        {name: 'Our Artists', url: '/artists'},
        {name: 'Artist Details', url: `/artists/${params.id}`},
        {name: 'Contact', url: ''},
      ]}/>
      <ContactUs />
    </>
  )
}
export default page