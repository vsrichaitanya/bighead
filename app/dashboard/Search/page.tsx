/* eslint-disable react/jsx-key */
"use client";

import { api } from "@/convex/_generated/api";
import { FileIcon, NotebookPen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchForm } from "./search-form";

function SearchResult({
  url,
  score,
  type,
  text,
}: {
  type: string;
  url: string;
  score: number;
  text: string;
}) {
  return (
    <Link href={url}>
      
      <li className="space-y-4 dark:hover:bg-neutral-700 bg-neutral-900 rounded p-4 whitespace-pre-line">
        <div className="flex justify-between gap-2 text-xl items-center">
          <div className="flex gap-2 items-center">
            {type === "note" ? (
              <NotebookPen className="w-5 h-5" />
            ) : (
              <FileIcon className="w-5 h-5" />
            )}
            {type === "note" ? "Note" : "Document"}
          </div>
          <div className="text-sm">Search Score {score.toFixed(2)}</div>
        </div>
        <div>{text.substring(0, 500) + "..."}</div>
      </li>
    </Link>
  );
}

export default function SearchPage() {
  const [results, setResults] =
    useState<typeof api.search.searchAction._returnType>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (!storedResults) return;
    setResults(JSON.parse(storedResults));
  }, []);

  return (
    <main className="w-full space-y-8 pb-44">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Search</h1>
      </div>

      <SearchForm
        setResults={(searchResults) => {
          setResults(searchResults);
          localStorage.setItem("searchResults", JSON.stringify(searchResults));
        }}
      />

      <ul className="flex flex-col gap-4">
        {results?.map((result) => {
          if (result.type === "notes") {
            return (
              <SearchResult
                type="note"
                url={`/dashboard/notes/${result.record._id}`}
                score={result.score}
                text={result.record.plainTextContent}
              />
            );
          } else {
            return (
              <SearchResult
                type="document"
                url={`/dashboard/documents/${result.record._id}`}
                score={result.score}
                text={result.record.title + ": " + result.record.description}
              />
            );
          }
        })}
      </ul>
    </main>
  );
}