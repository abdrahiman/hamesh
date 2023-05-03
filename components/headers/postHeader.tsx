import Link from "next/link";
import React from "react";
import ContentTable from "../post/contentTable";

function PostHeader() {
  return (
    <header className="flex w-full justify-start items-start flex-col mb-6">
      <h1 className="font-bold text-3xl text-black dark:text-white">
        ما هو الـ JWT ؟
      </h1>
      <div className="flex mt-5 mb-10 items-start text-gray-500 dark:text-gray-400">
        <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
          <Link href="/tag/Cloudflare">
            <p className="ml-2 rounded-full px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 leading-none text-sm">
              Cloudflare
            </p>
          </Link>
          <Link href="/tag/OpenAI">
            <p className="ml-2 rounded-full px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 leading-none text-sm">
              OpenAI
            </p>
          </Link>
        </div>
        <div className="ml-2 mb-4 md:ml-0">
          <span>Apr 20, 2023</span>
        </div>
      </div>
      <ContentTable />
    </header>
  );
}

export default PostHeader;
