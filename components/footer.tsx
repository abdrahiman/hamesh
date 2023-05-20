import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import BLOG from "../BLOG.config";
import SocailMedai from "./ui/socailMedai";

export default function Footer() {
  return (
    <footer className="mt-6 flex-shrink-0 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 transition-all md:px-8">
      {/* <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto"> */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b dark:border-gray-600 py-1">
        <ul className="flex flex-wrap justify-center md:justify-start md:gap-1">
          <Link href="/about">
            <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
              <div className="font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="inline-block mb-1 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <span className="inline-block m-1">من نحن</span>
              </div>
            </li>
          </Link>
          <Link href="/friends">
            <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
              <div className="font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="inline-block mb-1 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <span className="inline-block m-1">اصدقاء</span>
              </div>
            </li>
          </Link>
          <Link href="/books">
            <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
              <div className="font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="inline-block mb-1 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                <span className="inline-block m-1">مقالات</span>
              </div>
            </li>
          </Link>
          <Link href="/contact">
            <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
              <div className="font-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="inline-block mb-1 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="inline-block m-1">تواصل</span>
              </div>
            </li>
          </Link>
        </ul>
        <div className="hidden md:flex">
          <SocailMedai />
        </div>
      </div>
      <div className="text-gray-400 text-xs font-light py-4 max-md:px-4">
        ©{" "}
        {BLOG.since == new Date().getFullYear()
          ? new Date().getFullYear()
          : `${BLOG.since} - ${new Date().getFullYear()}`}{" "}
        موقع {BLOG.ArTitle}
        <p className="md:float-left">
          حقوق الملكية{" "}
          <a
            className="underline"
            href="https://creativecommons.org/licenses/by-sa/4.0/"
          >
            CC BY-SA 4.0
          </a>
          .
        </p>
      </div>
      {/* </footer> */}
    </footer>
  );
}
