import { getPosts } from "@/lib/getPosts";

export default async function BlogPage() {

  const posts = await getPosts();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Blog</h1>

      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <p className="text-gray-500 text-sm">
            by {post.author}
          </p>
        </div>
      ))}
    </div>
  );
}