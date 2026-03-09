"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import GoCreateButton from "@/components/GoCreateButton";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));

      const data: any[] = [];

      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex justify-center">
      <main className="w-full max-w-3xl px-6 py-16">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
            <h1 className="text-3xl font-bold">Personal Portfolio with Blog</h1>
            <p className="text-zinc-400 text-sm">
              Create a personal portfolio website with 
              an integrated blog where users can add, edit, and delete posts.
              This is an excellent project for learning the basics of frontend
              and backend development and gaining foundational experience in React and Next.js.
              <br /><br />
              <GoCreateButton />
            </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-zinc-900 border border-zinc-800 rounded p-6 hover:border-zinc-600 transition"
            >

              <div className="flex justify-between w-full mb-3">
                <span className="text-left">
                  <h2 className="text-xl font-semibold mb-2">
                    {post.title || "Untitled"}
                  </h2>
                </span>
                <span className="text-right">
                    <EditButton id={post.id} />
                    <DeleteButton id={post.id} />
                  </span>
                </div>

              {post.image && (
                <Image
                  src={
                    post.image.startsWith("http")
                      ? post.image
                      : `/images/${post.image}`
                  }
                  alt={post.title || "Post image"}
                  width={1920}
                  height={1080}
                  className="rounded mb-4 object-cover w-full"
                />
              )}
              
              <p className="text-zinc-300 mb-2 text-sm">
                {post.content}
                <br/>
              </p>

              <p className="mb-2 text-sm">
                Reference:
              </p>

              <p className="mb-5 text-xs">
                <a href={post.about1} target="_blank" className="bg-slate-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                  {post.about1}
                </a>
              </p>

              <p className="mb-5 text-xs">
                <a href={post.about2} target="_blank" className="bg-slate-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                  {post.about2}
                </a>
              </p>

              <p className="text-zinc-400 text-xs">
                Upload on {post.date?.toDate().toLocaleString()}
              </p>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}