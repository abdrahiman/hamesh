import Link from "next/link";
import React from "react";
import BLOG from "../../BLOG.config";

export default function CHeader() {
  return (
    <div className="mb-8 md:mb-16 text-gray-700 dark:text-gray-200 w-full">
      <h2 className="text-xl lg:text-3xl text-center mb-4 flex items-start justify-center">
        تواصل معنا
        <svg
          className="text-teal-700 dark:text-teal-400  w-8 h-8"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </h2>
      <p className="max-w-screen-md font-light md:text-lg text-center mx-auto">
        صوتك مسموع، راسلنا في حالة وجود ملاحظات، شكاوي او مقترحات .
      </p>
      <p className="max-w-screen-md font-light md:text-lg text-center mx-auto">
        يمكنك أيضًا التواصل معي مباشرة على تويتر
        <a
          href={BLOG.socialLink.twitter}
          target="_blank"
          className="mx-1 hover:text-violet-400 active:text-voilet-500 underline transition duration-100"
        >
          @{BLOG.socialLink.twitter?.slice(20)}
        </a>
      </p>
    </div>
  );
}
