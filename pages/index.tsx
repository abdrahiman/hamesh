import { motion } from "framer-motion";
import { duration } from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeHeader from "../components/headers/homeHeader";
import Post from "../components/post/post";
import useSWR from "swr";
import PostLoader from "../components/loaders";
import BLOG from "../BLOG.config";
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

export default function Page() {
  let [limit, setLimit] = useState(BLOG.postsPerPage);
  let {
    data: articles,
    error,
    isLoading,
  } = useSWR(
    `/api/articles${limit != BLOG.postsPerPage ? "?limit=" + limit : ""}`,
    fetcher
  );

  return (
    <>
      <Container>
        <HomeHeader />
        <main className="mb-2 w-full grid gap-4 grid-cols-2 max-md:grid-cols-1 md:mb-12 py-8 px-4 max-md:px-0">
          {articles?.data &&
            articles.data.map((art: IArticle) => (
              <Post key={art._id} art={art} />
            ))}

          {/* {isLoading && !articles?.data && (
            <>
              <PostLoader />
              <PostLoader />
              <PostLoader />
              <PostLoader />
            </>
          )}*/}
        </main>
        {articles?.data && articles.data.length == limit && (
          <button
            className="px-4 covr py-1 font-medium rounded-lg transition relative"
            onClick={() => setLimit(limit + BLOG.postsPerPage)}
          >
            Show More
          </button>
        )}
      </Container>
    </>
  );
}
