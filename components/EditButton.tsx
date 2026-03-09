"use client";

import Link from "next/link";

export default function EditButton({ id }: { id: string }) {
  return (
    <Link
      href={`/edit/${id}`}
      className="bg-yellow-500 hover:bg-yellow-700 p-2 text-black text-sm font-bold rounded"
    >
      Edit
    </Link>
  );
}