"use client";

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function CreatePost() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async () => {

    await addDoc(collection(db, "posts"), {
      title,
      content,
      author: "Bas",
      slug: title.toLowerCase().replaceAll(" ", "-"),
      date: new Date()
    });

    alert("Post created");
  };

  return (
    <div className="p-5">

      <input
        placeholder="Title"
        onChange={(e)=>setTitle(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <textarea
        placeholder="Content"
        onChange={(e)=>setContent(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={createPost}
        className="bg-blue-500 text-white p-2"
      >
        Create Post
      </button>

    </div>
  );
}