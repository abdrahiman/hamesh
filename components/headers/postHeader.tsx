import moment from "moment";
import Link from "next/link";
import React from "react";
import ContentTable from "../post/contentTable";

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
let getDate = (date: any) => {
  let o = new Date(date);
  let d = [
    o.getFullYear(),
    String(o.getMonth()).padStart(2, "0"),
    String(o.getDate()).padStart(2, "0"),
    String(o.getHours()).padStart(2, "0"),
    String(o.getMinutes()).padStart(2, "0"),
  ];
  return moment(d).locale("ar").fromNow();
};

function PostHeader({ art }: { art: IArticle }) {
  return (
    <header className="flex w-full justify-start items-start flex-col mb-6">
      <h1 className="font-bold text-3xl text-black dark:text-white">
        {art.title}
      </h1>
      <div className="flex mt-5 mb-10 items-start text-gray-500 dark:text-gray-400 flex-wrap">
        <div className="flex gap-2 flex-wrap max-w-full overflow-x-auto article-tags">
          {art.tags &&
            art.tags.map((t: string, i) => (
              <Link href={"/tag/" + t} key={i}>
                <p className="rounded-full px-2 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 leading-none text-sm">
                  {t}
                </p>
              </Link>
            ))}
        </div>
        <div className="mr-2 mb-4 md:mr-1">
          <span>{getDate(art.createdAt)}</span>
        </div>
      </div>
      <ContentTable />
    </header>
  );
}

export default PostHeader;
