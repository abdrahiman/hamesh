import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "../components/headers/bar";
import Post from "../components/post";

export default function Search() {
  return (
    <div className="my-container flex h-full justify-center flex-col max-w-3xl items-center mx-auto">
      <main className="m-auto flex-grow w-full transition-all max-w-2xl px-4">
        <SearchBar />
        <div className="article-container my-8">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </div>
  );
}
