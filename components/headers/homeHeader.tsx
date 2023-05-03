import Link from "next/link";
import React from "react";
import SocailMedai from "../socailMedai";

function HomeHeader() {
  return (
    <header className="flex sticky px-4 flex-col mb:w-3/5 w-full md:items-start mb-6 md:mb-0 text-right">
      <main className="notion light-mode notion-page md:ml-0">
        <div className="notion-text text-lg">
          أنا عبدالرحيم أنضام، مبرمج متخصص في عالم الـ Backend 👨‍💻⚙️ :
        </div>
        <ul className="notion-list notion-list-disc ">
          <li>أسعى جاهدًا لتعلم كل ما يدور حول البرمجة</li>
        </ul>
        <ul className="notion-list notion-list-disc ">
          <li>لكي أطور نفسي وأحاول تعليمه للآخرين</li>
        </ul>
        <ul className="notion-list notion-list-disc ">
          <li>أكتب أيضًا بعض المقالات، اتمنى ان تنال اعجابك </li>
        </ul>
      </main>
      <SocailMedai />
      <div className="flex flex-col  max-md:w-3/4 sm:flex-row sm:justify-center gap-4 mt-6">
        <Link href="/contact">
          <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 gap-3 inline-flex py-3 px-5 rounded-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="inline-block text-gray-600 dark:text-gray-100 h-7 w-7 mt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 dark:text-gray-100 mb-1">
                بكبسة زر
              </span>
              <span className="font-medium">تواصل معي</span>
            </span>
          </button>
        </Link>
        <button className="bg-gray-100 gap-3 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            className="inline-block text-gray-600 dark:text-gray-100 h-7 w-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 dark:text-gray-100 mb-1">
              RSS Reader
            </span>
            <span className="font-medium">اشترك</span>
          </span>
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
