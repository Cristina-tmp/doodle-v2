import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { Cog6ToothIcon, SparklesIcon } from "@heroicons/react/24/outline";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <>
      <header className="sticky top-0 bg-white ">
        <div className="flex w-full p-6 items-center justify-between ">
          <Link href={"/"}>
            <Image
              width="120"
              height="40"
              src="https://i.imgur.com/MuNjsZL.png"
              alt="logo"
            />
          </Link>

          <div className="flex-1">
            <SearchBox />
          </div>

          <div className="hidden md:inline-flex space-x-2">
            <Cog6ToothIcon className="header-icon" />
            <SparklesIcon className="header-icon" />
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
            Sign In
          </button>
        </div>

        <SearchHeaderOptions />
      </header>
    </>
  );
}
