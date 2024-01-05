import BlogDetailedPage from "@/app/components/blog/BlogDetailedPage";

export function page({ params }: { params: { id: string } }) {
  return <BlogDetailedPage blogId={params?.id} />;
}
export default page;
