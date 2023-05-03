import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocailMedai from "./socailMedai";
import { useRouter } from "next/router";
import MbNav from "./ui/mbNav";

export default function MyNav() {
  let [isDark, setDark] = useState(false);
  let [mbNav, setMbNav] = useState(false);
  let handleTheme = () => {
    setDark((prv) => !prv);
    let html: any = document.querySelector(":root");
    if (isDark) {
      html.className = "dark";
    } else {
      html.className = "light";
    }
  };
  let [Scroll, setScroll] = useState(0);
  //window events
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  //event scroll
  const handleScroll = () => {
    setScroll(window ? window.scrollY : 0);
    let el = document.querySelector(".content-table");
    let af = document.querySelector(".full-post");
    if (!af || !el) return;
    if (af?.getBoundingClientRect().y * 2 <= window.scrollY) {
      el.classList.add("scrolled");
    } else {
      el.classList.remove("scrolled");
    }
  };
  let r = useRouter();
  return (
    <>
      <div className="observer-element h-4 md:h-12"></div>
      <nav
        className={`sticky-nav max-w-3xl mx-auto m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 px-4 ${
          Scroll == 0 ? "" : "scrolling"
        }`}
        id="sticky-nav"
      >
        <div className="flex items-center flex-row justify-start">
          <Link aria-label="logo" href="/">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 100 100"
                className="h-6 opacity-100 hover:text-blue-500 dark:hover:text-blue-500 fill-current"
              >
                <g transform="translate(0.000000,100) scale(0.080000,-0.080000)">
                  <path d="M762 1203 c-6 -15 -13 -46 -17 -68 -4 -22 -13 -49 -20 -61 -15 -23 -122 -69 -257 -109 -49 -14 -88 -28 -88 -29 0 -2 33 -20 73 -40 49 -24 87 -36 115 -36 28 0 42 -4 42 -13 0 -34 -295 -517 -390 -639 -40 -52 -4 -28 86 56 49 46 105 109 124 141 19 31 64 98 100 148 77 108 125 186 173 283 20 39 46 78 59 86 13 8 69 34 126 58 107 45 118 57 110 111 -3 21 -10 25 -78 34 l-75 10 -5 45 c-5 42 -7 45 -36 48 -26 3 -33 -1 -42 -25z"></path>
                  <path d="M754 616 c-40 -19 -88 -39 -108 -46 -43 -14 -45 -30 -7 -72 25 -28 33 -31 80 -30 39 1 54 -3 58 -15 7 -18 -30 -140 -58 -192 -36 -67 6 -93 135 -84 l86 6 0 -26 c0 -14 -4 -37 -10 -51 -5 -14 -8 -26 -6 -26 7 0 110 68 129 85 11 10 17 30 17 60 0 62 -22 70 -150 57 -52 -5 -98 -6 -103 -2 -4 3 3 31 16 61 13 30 32 78 42 108 10 30 28 70 41 89 26 38 30 63 14 93 -17 31 -91 25 -176 -15z"></path>
                </g>
              </svg>
            </div>
          </Link>
          <p className="mr-2 font-medium">
            {Scroll >= 100 && r.query.slug ? r.query.slug : ""}
          </p>
        </div>
        <div className="flex">
          <ul className="hidden md:flex md:gap-1">
            <Link href="/">
              <li
                className={`hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav ${
                  r.route == "/" ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                <div>
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  <span className="inline-block m-1">الرئيسية</span>
                </div>
              </li>
            </Link>
            {/* <Link href="/newsletter">
              <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
                <div >
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  <span className="inline-block m-1">اشتراك</span>
                </div>
              </li>
            </Link>
            <Link href="/notes">
              <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
                <div >
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                  <span className="inline-block m-1">الملاحضات</span>
                </div>
              </li>
            </Link>
            <Link href="/projects">
              <li className=" hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav">
                <div >
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    ></path>
                  </svg>
                  <span className="inline-block m-1">المشاريع</span>
                </div>
              </li>
            </Link> */}
            <Link href="/search">
              <li
                className={`hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav ${
                  r.route == "/search" ? "bg-gray-200 dark:bg-gray-700" : ""
                }`}
              >
                <div>
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="inline-block m-1">البحث</span>
                </div>
              </li>
            </Link>
          </ul>
          <div className="nav-func-btn block">
            <button
              aria-label="ThemeSwitcher"
              onClick={handleTheme}
              className="p-2 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </button>
            <Link href="/">
              <button
                aria-label="LangSwitcher"
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
          <MbNav mbNav={mbNav} setMbNav={setMbNav} />
        </div>
      </nav>
    </>
  );
}
