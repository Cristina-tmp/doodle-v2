"use client";
import React from "react";
import { MagnifyingGlassIcon, CameraIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  // select tab, change url
  function selectTab(tab) {
    router.push(
      `/search/${tab === "images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        } `}
      >
        <MagnifyingGlassIcon className="h-5" />
        <p>All</p>
      </div>

      {/* image tab */}

      <div
        onClick={() => selectTab("images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/images" && "!text-blue-600 !border-blue-600"
        } `}
      >
        <CameraIcon className="h-5" />
        <p>Images</p>
      </div>
    </div>
  );
}
