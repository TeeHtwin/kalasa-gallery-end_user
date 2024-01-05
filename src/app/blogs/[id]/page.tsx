import BlogDetailedPage from "@/app/components/blog/BlogDetailedPage";

export default function BlogPage({ params }: { params: { id: string } }) {
  return <BlogDetailedPage blogId={params?.id} />;
}
