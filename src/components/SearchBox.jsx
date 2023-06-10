"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  // get router
  const router = useRouter();

  // call hook
  const searchParams = useSearchParams();
  // get search term from url
  const searchTerm = searchParams.get("searchTerm");
  // set search term to state
  const [term, setTerm] = useState(searchTerm || "");

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    // if empty, return nothing
    if (!term.trim()) return;
    // redirect to search page
    // window.location.href = `/search/web?searchTerm=${term}`;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex border-gray-200 rounded-full shadow-lg ml-10 px-6 py-3 mr-5 flex-grow max-w-3xl items-center "
    >
      <input
        value={term}
        type="text"
        className="w-full focus:outline-none "
        onChange={(e) => setTerm(e.target.value)}
      />
      <XMarkIcon
        className="text-2xl cursor-pointer text-gray-500 sm:mr-2 h-5"
        onClick={() => setTerm("")}
      />
      {/* hidden only at small screen */}
      <MicrophoneIcon className="hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 h-5" />
      <MagnifyingGlassIcon
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer h-5"
        onClick={handleSubmit}
      />
    </form>
  );
}
