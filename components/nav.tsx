import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocailMedai from "./ui/socailMedai";
import { useRouter } from "next/router";
import MbNav from "./ui/mbNav";
import BLOG from "../BLOG.config";
import localFont from "next/font/local";

export default function MyNav() {
  let [isDark, setDark] = useState(false);
  let [mbNav, setMbNav] = useState(false);
  let handleTheme = () => {
    let html: any = document.querySelector(":root");
    if (isDark) {
      html.className = "light";
      localStorage.setItem("isDark", `false`);
    } else {
      html.className = "dark";
      localStorage.setItem("isDark", `true`);
    }
    setDark((prv) => !prv);
  };
  let [Scroll, setScroll] = useState(0);
  //window events
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // get the theme from localstorage
  useEffect(() => {
    document.documentElement.lang = "ar";
    let html: any = document.querySelector(":root");
    if (localStorage.getItem("isDark") !== undefined) {
      if (localStorage.getItem("isDark") === "true") {
        setDark(true);
        html.className = "dark";
      } else if (localStorage.getItem("isDark") === "false") {
        setDark(false);
        html.className = "light";
      }
    }
  }, []);
  //event scroll
  const handleScroll = () => {
    if (BLOG.autoCollapsedNavBar) {
      setScroll(window ? window.scrollY : 0);
    }
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
  let slug: any = r.query.slug || "";

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
                version="1.0"
                width="128px"
                height="96px"
                viewBox="0 0 360 211"
                preserveAspectRatio="xMidYMid meet"
                // className="h-24 w-32"
              >
                <g
                  transform="translate(0.000000,211.000000) scale(0.100000,-0.100000)"
                  // fill="#000000"
                  className="opacity-100 dark:fill-day fill-night hover:fill-violet-500 dark:hover:fill-violet-500"
                  stroke="none"
                >
                  <path d="M1202 1492 c-9 -6 -12 -27 -10 -63 l3 -54 64 -2 63 -3 -4 55 c-3 30 -7 57 -9 59 -10 9 -95 15 -107 8z" />
                  <path d="M2063 1383 c-13 -46 -8 -396 7 -447 22 -78 3 -74 390 -77 l345 -2 12 44 c6 24 12 111 12 192 1 144 -5 181 -33 199 -14 9 -123 10 -193 2 -43 -6 -53 -10 -53 -25 0 -23 -16 -24 -121 -8 -136 21 -149 7 -149 -166 l0 -115 -34 0 c-33 0 -34 2 -41 48 -4 26 -5 121 -4 212 l4 165 -67 3 c-66 3 -68 2 -75 -25z m617 -303 c0 -25 -4 -30 -25 -30 -21 0 -25 5 -25 30 0 25 4 30 25 30 21 0 25 -5 25 -30z m-190 -25 c0 -21 -5 -25 -30 -25 -25 0 -30 4 -30 25 0 21 5 25 30 25 25 0 30 -4 30 -25z" />
                  <path d="M1285 1350 c-4 -6 -4 -33 0 -60 l7 -48 46 -4 c68 -6 72 -3 72 57 0 46 -3 53 -22 59 -36 9 -96 7 -103 -4z" />
                  <path d="M1135 1340 c-3 -5 -3 -32 1 -59 l6 -49 43 -4 c72 -5 75 -3 75 57 0 39 -4 54 -16 59 -25 10 -102 7 -109 -4z" />
                  <path d="M1785 1263 c-33 -1 -79 -5 -102 -9 l-43 -5 0 -103 c0 -147 -5 -166 -44 -166 l-31 0 -1 73 c0 39 -4 89 -8 110 l-7 37 -57 0 c-81 0 -85 -5 -77 -83 9 -83 0 -127 -26 -127 -17 0 -19 8 -20 73 -1 105 -8 121 -49 125 -18 2 -48 1 -66 -3 l-33 -6 -3 -97 c-3 -83 -6 -97 -20 -100 -16 -3 -18 5 -18 66 0 38 -3 84 -6 101 -6 31 -7 31 -71 31 l-65 0 7 -158 7 -159 -47 -6 c-26 -4 -52 -4 -57 -1 -7 5 -8 41 -4 104 8 122 1 133 -95 128 -61 -3 -64 -4 -61 -27 1 -13 -5 -60 -13 -103 -22 -117 -20 -203 5 -228 23 -23 46 -24 264 -13 l137 6 -2 71 -2 71 29 -1 c16 -1 46 -5 67 -9 27 -6 42 -4 55 7 14 13 32 14 105 6 48 -4 187 -7 309 -6 l222 3 13 50 c22 87 44 255 37 291 -3 19 -14 38 -23 43 -21 11 -129 19 -206 14z m10 -128 c0 -27 -4 -30 -32 -33 -30 -3 -33 -1 -33 26 0 36 8 44 40 40 20 -2 25 -8 25 -33z" />
                </g>
              </svg>
            </div>
          </Link>
          <p className="mr-2 font-medium">
            {Scroll >= 100 && slug ? slug.replaceAll("-", " ") : ""}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
              className="p-2 mr-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </button>
            {/* <Link href="/">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </button>
            </Link> */}
          </div>
          <MbNav mbNav={mbNav} setMbNav={setMbNav} />
        </div>
      </nav>
    </>
  );
}
