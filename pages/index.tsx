import { motion } from "framer-motion";
import { duration } from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeHeader from "../components/headers/homeHeader";
import Post from "../components/post";

export default function Page() {
  useEffect(() => {
    document.body.className = "bg-day dark:bg-night";
    document.querySelector(":root")?.setAttribute("lang", "ar");
  });
  return (
    <>
      <Container>
        <HomeHeader />
        <main className="mb-2 w-full md:mb-12 py-8 px-4">
          <Post />
          <Post />
          <Post />
        </main>
      </Container>
    </>
  );
}
