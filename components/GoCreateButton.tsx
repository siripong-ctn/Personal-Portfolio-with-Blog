"use client";

import Link from "next/link";

export default function GoCreateButton() {
  return (
    <Link
      href="/create"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go create
    </Link>
  );
}