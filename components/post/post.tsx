import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
// get Date
let getDate = (date: any) => {
  // let o = new Date(date);
  // let d = [
  //   o.getFullYear(),
  //   String(o.getMonth()).padStart(2, "0"),
  //   String(o.getDate()).padStart(2, "0"),
  //   String(o.getHours()).padStart(2, "0"),
  //   String(o.getMinutes()).padStart(2, "0"),
  // ];
  return `${moment(date).locale("ar").format("MMMM")} ${moment(date)
    .locale("en")
    .format("DD,  YYYY")}`;
};

export default function Post({ art }: { art: IArticle }) {
  return (
    <div className="overflow-hidden transition-shadow duration-300 rounded">
      <Link href={"/" + art.slug} aria-label="Article">
        <img
          src={art.coverUrl}
          className="object-cover w-full h-64 rounded"
          alt=""
        />
      </Link>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold text-gray-800 dark:text-gray-200 uppercase">
          {getDate(art.createdAt)}
        </p>
        <Link
          href={"/" + art.slug}
          aria-label="Article"
          className="inline-block mb-3 text-black dark:text-white transition-colors duration-200 hover:text-primaryColor dark:hover:text-primaryColorD"
        >
          <h2 className="text-2xl font-bold ">{art.title}</h2>
        </Link>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {art.description}
        </p>
        <div className="flex space-x-4 gap-4">
          <div
            aria-label="Likes"
            className="flex items-center transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-gray-600 dark:text-gray-300 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="6 23 1 23 1 12 6 12"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {art.likes}
            </p>
          </div>
          <div
            aria-label="Comments"
            className="flex items-center transition-colors duration-200 hover:text-deep-purple-accent-700 group"
          >
            <div className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600 dark:text-gray-300 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="23 5 23 18 19 18 19 22 13 18 12 18"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <polygon
                  points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">81</p>
          </div>
        </div>
      </div>
    </div>

    // <Link href={"/" + art.slug}>
    //   <article className="group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5 py-5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 ">
    //     {/* max-md:py-5 */}
    //     <img
    //       alt="Cover image"
    //       className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200 opacity-0 max-md:opacity-90 hover:opacity-90"
    //       src={
    //         art.coverUrl ||
    //         "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_370/https://ssd-conf.org/wp-content/uploads/2016/06/blog-thumb-placeholder.jpg"
    //       }
    //     />
    //     <div className="hidden md:block md-cover absolute inset-0 right-0"></div>
    //     <div className="md:hidden sm-cover absolute inset-0 right-0"></div>

    //     <div className="relative mt-auto">
    //       <header className="flex flex-col justify-between md:flex-row md:items-baseline">
    //         <h2 className="text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100">
    //           {art.title}
    //         </h2>
    //         <span className="text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400">
    //           <span>{getDate(art.createdAt)}</span>
    //         </span>
    //       </header>
    //       <p className="font-light hidden md:block leading-8 text-gray-700 dark:text-gray-300">
    //         {art.description}
    //       </p>
    //     </div>
    //   </article>
    // </Link>
  );
}
