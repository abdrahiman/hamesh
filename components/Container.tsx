// import SEO from "@/components/Common/SEO";
import React from "react";
import SEO from "./seo";

function Container({
  children,
  fullWidth,
  customMeta,
}: {
  children: any;
  fullWidth?: boolean;
  customMeta?: {};
}) {
  const meta = {
    title: "Hamish",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <SEO meta={meta} />
      <main
        className={`m-auto flex-grow w-full transition-all flex h-full justify-center flex-col items-center ${
          !fullWidth ? "max-w-3xl px-4 mx-auto" : "px-4 md:px-24"
        }`}
      >
        {children}
      </main>
    </>
  );
}
export default Container;
