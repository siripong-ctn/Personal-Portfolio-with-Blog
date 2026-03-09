"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function CreatePost() {

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image,setImage] = useState<File | null>(null);
  const [about1, setAbout1] = useState("");
  const [about2, setAbout2] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {

        let imageUrl = "";

        if(image){

        const storageRef = ref(storage, `images/${Date.now()}-${image.name}`);

        await uploadBytes(storageRef,image);

        imageUrl = await getDownloadURL(storageRef);
        }

        await addDoc(collection(db,"posts"),{
        title,
        content,
        image:imageUrl,
        about1,
        about2,
        date: Timestamp.now()
        });

        router.push("/");

    } catch(err){
        console.error(err);
    }

    };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center">
      <main className="w-full max-w-2xl p-10">

        <h1 className="text-2xl font-bold mb-6">
          Create Post Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 bg-zinc-800 rounded"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            placeholder="Content"
            className="w-full h-100 p-2 bg-zinc-800 rounded"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="w-full p-2 bg-zinc-800 rounded"
            onChange={(e)=>setImage(e.target.files?.[0] || null)}
            />

          <input
            type="text"
            placeholder="Reference link 1"
            className="w-full p-2 bg-zinc-800 rounded"
            value={about1}
            onChange={(e)=>setAbout1(e.target.value)}
          />

          <input
            type="text"
            placeholder="Reference link 2"
            className="w-full p-2 bg-zinc-800 rounded"
            value={about2}
            onChange={(e)=>setAbout2(e.target.value)}
          />

          <button
            className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded font-bold"
          >
            Create Post
          </button>

        </form>

      </main>
    </div>
  );
}