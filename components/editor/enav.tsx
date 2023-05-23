import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { EditorContext } from "../../context/edioreProvider";

function ENAV() {
  let { editorData, setEditorData } = useContext(EditorContext);
  let r = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  let [isDark, setDark] = useState(false);
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
  return (
    <>
      <nav
        id="topContainer"
        className=" top-0 w-full z-50 px-4 h-[46px] backdrop-blur-[10px] transition ml-0 fixed bg-none"
      >
        <div
          id="headerBackground"
          className=""
          style={{ backgroundColor: "rgb(34, 34, 34)" }}
        ></div>
        <div className="flex items-center justify-between h-[46px]">
          <div className="mr-4 sm:ml-4 h-full flex items-center justify-start shrink-0 text-[17px]">
            <Link href="/dashboard">لوحة التحكم</Link>
          </div>
          {r.route != "/dashboard" && (
            <div className="flex items-center justify-start flex-grow mr-2 overflow-hidden shrink">
              <span className="documentTitle text-[14px] tracking-[-0.1px] leading-none px-1 py-1 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                .
              </span>
              {r.route == "/dashboard/editor" && (
                <>
                  <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    كتابة
                  </div>
                  <span className="documentTitle text-[14px] tracking-[-0.1px] leading-none px-1 py-1 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    .
                  </span>
                  <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    {editorData.title || "بلا عنوان"}
                  </div>
                </>
              )}
              {r.route == "/dashboard/editor/[id]" && (
                <>
                  <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    تعديل
                  </div>
                  <span className="documentTitle text-[14px] tracking-[-0.1px] leading-none px-1 py-1 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    .
                  </span>
                  <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    {editorData.title || "بلا عنوان"}
                  </div>
                </>
              )}
              {r.route == "/dashboard/draft/[id]" && (
                <>
                  <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    <Link href={"/dashboard/editor"}>مسودة</Link>
                  </div>
                  <span className="documentTitle text-[14px] tracking-[-0.1px] leading-none px-1 py-1 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    .
                  </span>
                  <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                    {editorData.title || "بلا عنوان"}
                  </div>
                </>
              )}
            </div>
          )}
          <div className="right-area h-full mr-[13px] flex items-center justify-end flex-none">
            <div className="relative inline-block ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute left-0 z-20 w-48 py-2 mt-2 origin-top-left bg-white rounded-md shadow-xl dark:bg-gray-800 ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <a
                  href="#"
                  className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span className="mx-1">view profile</span>
                </a>
                <button
                  onClick={handleTheme}
                  className="flex w-full items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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

                  <span className="mx-1"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ENAV;
