import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Post() {
  return (
    <div>
      <Link href="/openai-worker">
        <article className="group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5 py-3 dark:bg-gray-600">
          {/* max-md:py-5 */}
          <img
            alt=""
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            src="https://cdn.pixabay.com/photo/2022/01/25/16/55/iceberg-6966784__340.jpg"
          />
          <div className="hidden md:block md-cover absolute inset-0"></div>
          <div className="md:hidden sm-cover absolute inset-0 right-0"></div>
          <div className="relative mt-auto">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100">
                ما الفرق بين Sequential, Concurrency, Parallelism ؟
              </h2>
              <span className="text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400">
                <span>Apr 20, 2023</span>
              </span>
            </header>
            <p className="font-light hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              شرح للفروقات بين Sequential, Concurrency, Parallelism وضرب مثال
              لكيفية عمل الـ Thread مع كل اسلوب
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}
