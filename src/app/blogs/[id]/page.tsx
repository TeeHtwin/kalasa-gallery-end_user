import BlogDetailedPage from "@/components/blog/BlogDetailedPage";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <BlogDetailedPage blogId={id} />;
}
