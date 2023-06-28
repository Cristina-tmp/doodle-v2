import React from "react";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function HomeHeader() {
  //...
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          Dmail{" "}
        </Link>

        <Link href="https://images.google.com" className="hover:underline">
          Images{" "}
        </Link>

        <SparklesIcon className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2 h-9" />
        <button className="bg-blue-500 px-6 py-2 text-white font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}
