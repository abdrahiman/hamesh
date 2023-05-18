import React, { useEffect, useState } from "react";

import Container from "../components/Container";
import PostHeader from "../components/headers/postHeader";
import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};

// import Highlight.js and just the languages you need
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { FullPostLoader } from "../components/loaders";
import Link from "next/link";
import BLOG from "../BLOG.config";
import Error from "../components/Error";
hljs.registerLanguage("javascript", javascript);

export async function getServerSideProps(ctx: any) {
  return { props: { slug: decodeURIComponent(`${ctx.query.slug}`) } };
}
export default function FullPost({ slug }: { slug: string }) {
  let r = useRouter();

  let {
    data: article,
    error,
    isLoading,
  } = useSWR("/api/articles/article?slug=" + slug, fetcher);
  // checke if the error is 404

  useEffect(() => {
    if (!document.querySelector("code")) return;
    document.querySelectorAll("pre button.copy").forEach((el) => el.remove());
    document.querySelectorAll("code").forEach((c: any) => {
      c.setAttribute("className", "js");
      let Btn: any = document.createElement("button");
      Btn.className = "copy";
      Btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>`;
      c.parentElement.appendChild(Btn);
      Btn.onclick = () => {
        navigator.clipboard.writeText(
          Btn.parentElement.firstElementChild.textContent
        );
        Btn.classList.add("copied");
        setTimeout(() => Btn.classList.remove("copied"), 3000);
      };
      hljs.highlightElement(c);
    });
    document.querySelectorAll("article.content a").forEach((a: any) => {
      if (a.href.includes(BLOG.link)) return;
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noreferrer");
    });
    document
      .querySelectorAll("article.content h1,article.content h2")
      .forEach((el: any) => {
        let a = document.createElement("a");
        a.className = "inline-block mr-2";
        a.href = "#" + el.textContent.trim().replaceAll(" ", "-");
        a.innerHTML = `<svg class="autolink-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"></path></svg>`;
        el.appendChild(a);
      });
  }, [article]);

  if (article?.content) {
    return (
      <Container
        customMeta={{
          title: article.title,
          description: article.description,
          type: "article",
        }}
        className="full-post"
      >
        <PostHeader art={article} />
        <article
          className="content w-full"
          dangerouslySetInnerHTML={{
            __html: article.content.replaceAll("h1", "h2"),
          }}
        ></article>
      </Container>
    );
  }
  if (!article?.content && !isLoading) {
    return (
      <Container>
        <Error />
      </Container>
    );
  }
  if (!article?.content && isLoading) {
    return (
      <Container>
        <FullPostLoader />
      </Container>
    );
  }
}
