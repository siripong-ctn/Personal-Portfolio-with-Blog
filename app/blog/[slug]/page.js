import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function PostPage({ params }) {

  const q = query(
    collection(db, "posts"),
    where("slug", "==", params.slug)
  );

  const snapshot = await getDocs(q);

  let post = null;

  snapshot.forEach((doc) => {
    post = doc.data();
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}