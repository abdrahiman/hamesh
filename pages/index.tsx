import { motion } from "framer-motion";
import { duration } from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeHeader from "../components/headers/homeHeader";
import Post from "../components/post/post";
import useSWR from "swr";
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
  let { data: articles, error, isLoading } = useSWR("/api/articles/", fetcher);

  return (
    <>
      <Container>
        <HomeHeader />
        <main className="mb-2 w-full md:mb-12 py-8 px-4">
          {articles?.data &&
            articles.data.map((art: IArticle) => (
              <Post key={art._id} art={art} />
            ))}
        </main>
      </Container>
    </>
  );
}
