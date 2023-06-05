import Link from "next/link";
import React from "react";
import BLOG from "../../BLOG.config";
import SocailMedai from "../ui/socailMedai";

function HomeHeader() {
  return (
    <header className="flex sticky px-4 flex-col mb:w-3/5 w-full md:items-start mb-6 md:mb-0 text-right">
      <main className="notion light-mode notion-page md:ml-0">
        {/* <h1 className="notion-text text-lg">
          أنا عبدالرحيم أنضام، مبرمج متخصص في عالم الـ WEB 👨‍💻⚙️ :
        </h1>
        <ul className="notion-list notion-list-disc ">
          <li>أسعى جاهدًا لتعلم كل ما يدور حول البرمجة</li>
        </ul>
        <ul className="notion-list notion-list-disc ">
          <li>لكي أطور نفسي وأحاول تعليمه للآخرين</li>
        </ul>
        <ul className="notion-list notion-list-disc ">
          <li>أكتب أيضًا بعض المقالات، اتمنى ان تنال اعجابك </li>
        </ul> */}
        <h1 className="text-5xl max-md:text-4xl font-extrabold mb-4 flex items-start">
          مدونة {BLOG.ArTitle}
          <svg
            className="text-teal-700 dark:text-teal-400  w-10 h-10"
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
        </h1>
        <p className="leading-7 text-base">
          الويب يعني ثقافة المشاركة، لذلك نعتقد في مدونة {BLOG.ArTitle} بأن
          المعلومة مهما كانت بسيطة لا يجب أن تبقى حكرا على أشخاص معينين بل يجب
          مشاركتها مع الآخرين وبذلك نرتقي بأنفسنا وبمحتوى لغتنا العربية العزيزة
          على الإنترنت.
        </p>
      </main>
      <SocailMedai />
      <div className="flex flex-col  max-md:w-3/4 sm:flex-row sm:justify-center gap-4 mt-6">
        <Link href="/contact">
          <button className="w-full dark:bg-opacity-30 bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 gap-3 inline-flex py-3 px-5 rounded-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="inline-block text-gray-600 dark:text-gray-100 h-7 w-7 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
      </div>
    </header>
  );
}

export default HomeHeader;
