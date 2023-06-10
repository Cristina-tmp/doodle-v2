import React from "react";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";
//import { useSearchParams } from "next/navigation";

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  //const searchParams = useSearchParams();
  //const searchTerm = searchParams.get("searchTerm");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&start=${startIndex}`
  );

  // error handling
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  const results = data.items;
  //console.log(results);

  // error handling - unintelligible search term
  if (!results) {
    return (
      <>
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">No results found</h1>
          <p className="text-lg">
            Try search something else or go back to
            <Link href="/" className="text-blue-500 pl-1">
              Homepage
            </Link>
          </p>
        </div>
        ;
      </>
    );
  }

  return (
    // <div className="">web </div>
    <>
      {results && <WebSearchResults results={data} />}
      {/* results.map((result) => <h1 key={result.title}>{result.title}</h1>)} */}
    </>
  );
}
