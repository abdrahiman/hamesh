import React, { useState } from "react";
import SearchBar from "../../components/headers/bar";
import Post from "../../components/post/post";
import useSWR from "swr";
import { useRouter } from "next/router";
import PostLoader from "../../components/loaders";
import BLOG from "../../BLOG.config";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};
interface IArticle {
  slug: string;
  title: string;
  content: string;
  markdown: string;
  isDraft: boolean;
  description: string;
  coverUrl: string;
  tags: [string];
  likes: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export default function Tag() {
  let r = useRouter();
  let [limit, setLimit] = useState(BLOG.postsPerPage);

  let {
    data: articles,
    error,
    isLoading,
  } = useSWR(
    `/api/articles?tag=${r.query.name || ""}${
      limit != BLOG.postsPerPage ? "?limit=" + limit : ""
    }
    `,
    fetcher
  );
  let HandleChange = (e: any) => {
    r.push("/search?q=" + e.target.value);
  };
  return (
    <div className="my-container flex h-full justify-center flex-col max-w-3xl items-center mx-auto">
      <main className="m-auto flex-grow w-full transition-all max-w-2xl px-4">
        <SearchBar HandleChange={HandleChange} inpText={""} />
        <div className="article-container my-8">
          {articles?.data &&
            articles.data.map((art: IArticle) => (
              <Post key={art._id} art={art} />
            ))}
          {isLoading && !articles?.data && (
            <>
              <PostLoader />
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </>
          )}
          {articles?.data && articles.data.length == limit && (
            <button
              className="px-4 covr py-1 font-medium rounded-lg transition relative"
              onClick={() => setLimit(limit + BLOG.postsPerPage)}
            >
              Show More
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
