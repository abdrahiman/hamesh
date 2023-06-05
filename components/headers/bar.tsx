import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};
interface ITag {
  num: number;
  name: string;
}
export default function SearchBar({
  HandleChange,
  inpText,
}: {
  HandleChange: any;
  inpText: string;
}) {
  let [tags, setTags] = useState<ITag[]>([]);
  useEffect(() => {
    // edge functions
    // articles:{post:{"a","b"},post:{"a","c"}} => tags:{"a"2,"b","c"}
    let getTagsFromPosts = async () => {
      if (tags.length !== 0) return;
      // i have an array of articles
      let posts = await fetcher("/api/articles/");
      if (posts?.data) {
        let data: ITag[] = [];
        // loop in the posts and tags
        posts.data.forEach((post: any) => {
          post.tags.forEach((tag: any) => {
            // and chek if the tags is alerdy in the new array
            let statement = data.filter((el) => el.name == tag);
            // if false create a new one
            if (statement.length === 0) {
              data.push({ name: tag, num: 1 });
            } else {
              // if true add to the number property
              statement[0].num++;
            }
          });
        });
        setTags(data);
      }
    };
    getTagsFromPosts();
  }, []);
  let r = useRouter();
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث داخل المدونة..."
          value={inpText}
          autoFocus
          onChange={HandleChange}
          className="w-full bg-white dark:bg-gray-700 shadow-md rounded-lg outline-none focus:shadow p-3"
        />
        <svg
          className="absolute left-3 top-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="tag-container">
        <div className="flex flex-wrap justify-center mt-4">
          {tags?.map((t: ITag, i) => (
            <div
              key={i}
              className={
                r.query.name == t.name
                  ? "m-1 font-medium rounded-lg whitespace-nowrap hover:text-gray-100 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-100 bg-gray-400 dark:bg-gray-600"
                  : "m-1 font-medium rounded-lg whitespace-nowrap hover:text-gray-100 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-400 bg-gray-100 dark:bg-transparent"
              }
            >
              <Link
                className="px-4 py-2 block"
                href={r.query.name != t.name ? "/tag/" + t.name : "/search"}
              >
                {t.name} ({t.num})
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
