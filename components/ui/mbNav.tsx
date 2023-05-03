import Link from "next/link";
import React from "react";
import SocailMedai from "../socailMedai";

function MbNav({ mbNav, setMbNav }: { mbNav: boolean; setMbNav: any }) {
  return (
    <div className="md:hidden mr-2 block ">
      <button
        type="button"
        onClick={() => setMbNav(!mbNav)}
        aria-label="Menu"
        className="hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3"
      >
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
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {mbNav && (
        <div className="absolute left-0 w-40 ml-4 mt-2 bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none transition">
          <div className="py-1">
            <Link href="/">
              <button className="text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5">
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
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className="m-1">الرئيسية</span>
              </button>
            </Link>
            {/* <Link href="/newsletter">
              <button className="text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5">
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
                    stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  ></path>
                </svg>
                <span className="m-1">اشتراك</span>
              </button>
            </Link>
            <Link href="/notes">
              <button className="text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5">
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
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
                <span className="m-1">الملاحضات</span>
              </button>
            </Link>
            <Link href="/projects">
              <button className="text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5">
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
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
                <span className="m-1">المشاريع</span>
              </button>
            </Link> */}
            <Link href="/search">
              <button className="text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5">
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
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="m-1">البحث</span>
              </button>
            </Link>
          </div>
          <div className="px-4 py-4">
            <SocailMedai />
          </div>
        </div>
      )}
    </div>
  );
}

export default MbNav;
