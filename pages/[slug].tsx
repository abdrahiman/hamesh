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
        // date={new Date(frontMatter.publishedAt).toISOString()}
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
        <h1>an error went happend</h1>
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
