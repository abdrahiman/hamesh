import Link from "next/link";
import React from "react";
import BLOG from "../../BLOG.config";

export default function CHeader() {
  return (
    <div className="mb-8 md:mb-16 text-gray-700 dark:text-gray-200 w-full">
      <h2 className="text-xl lg:text-3xl font-light text-center mb-4">
        一تواصل معنا
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
