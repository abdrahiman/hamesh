// import SEO from "@/components/Common/SEO";
import React from "react";
import BLOG from "../BLOG.config";
import SEO from "./seo";

function Container({
  children,
  fullWidth,
  customMeta,
  className,
}: {
  children: any;
  fullWidth?: boolean;
  customMeta?: {};
  className?: string;
}) {
  const meta = {
    title: BLOG.title,
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <SEO meta={meta} />
      <main
        className={`m-auto flex-grow w-full transition-all flex h-full justify-center flex-col items-center ${
          !fullWidth ? "max-w-3xl px-4 mx-auto" : "px-4 md:px-24"
        } ${!className ? "" : className}`}
      >
        {children}
      </main>
    </>
  );
}
export default Container;
