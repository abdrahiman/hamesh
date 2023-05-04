import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContentTable from "../components/post/contentTable";
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
hljs.registerLanguage("javascript", javascript);

export async function getServerSideProps(ctx: any) {
  return { props: { slug: decodeURIComponent(`${ctx.query.slug}`) } };
}
export default function FullPost({ slug }: { slug: string }) {
  let {
    data: article,
    error,
    isLoading,
  } = useSWR("/api/articles/article?slug=" + slug, fetcher);

  useEffect(() => {
    if (document.querySelector(".prview code") === undefined) return;
    document.querySelectorAll("pre button.copy").forEach((el) => el.remove());
    document.querySelectorAll("code").forEach((c: any) => {
      c.setAttribute("className", "js");
      let Btn: any = document.createElement("button");
      Btn.className = "copy";
      Btn.innerHTML = `<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg>`;
      c.parentElement.appendChild(Btn);
      Btn.onclick = () => {
        navigator.clipboard.writeText(
          Btn.parentElement.firstElementChild.textContent
        );
        console.log(Btn.parentElement.firstElementChild.textContent);
        Btn.classList.add("copied");
        setTimeout(() => Btn.classList.remove("copied"), 3000);
      };
      hljs.highlightElement(c);
    });
  }, []);
  let r = useRouter();

  if (article) {
    return (
      <Container
        customMeta={{
          title: article.title || "",
          description: article.description || "",
          type: "article",
        }}
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
  } else {
    return <div>Loading</div>;
  }
}
