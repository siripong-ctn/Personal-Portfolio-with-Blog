"use client";

import { db } from "@/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default function DeleteButton({ id }: { id: string }) {

  const handleDelete = async () => {
    if (!confirm("Delete this post?")) return;

    try {
      await deleteDoc(doc(db, "posts", id));
      location.reload();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 cursor-pointer hover:bg-red-700 p-2 text-white text-sm font-bold rounded ml-2"
    >
      Delete
    </button>
  );
}