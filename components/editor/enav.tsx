import { useRouter } from "next/router";
import React, { useContext } from "react";
import { EditorContext } from "../../context/edioreProvider";

function ENAV() {
  let { editorData, setEditorData } = useContext(EditorContext);
  let r = useRouter();

  return (
    <>
      <nav
        id="topContainer"
        className=" top-0 w-full z-50 h-[46px] backdrop-blur-[10px] transition ml-0 fixed bg-none"
      >
        <div
          id="headerBackground"
          className=""
          style={{ backgroundColor: "rgb(34, 34, 34)" }}
        ></div>
        <div className="flex items-center justify-between h-[46px]">
          <div className="mr-4 sm:ml-4 h-full flex items-center justify-start shrink-0 text-[17px]">
            {r.route == "/dashboard" && "قيادة "}
          </div>
          {r.route == "/dashboard/editor" && (
            <div className="flex items-center justify-start flex-grow mr-2 overflow-hidden shrink">
              <div className="documentTitle text-[17px] tracking-[-0.1px] leading-none px-1.5 py-1.5 rounded-md transition truncate select-none text-darkTextColor cursor-default ">
                {editorData.title || "بلا عنوان"}
              </div>
            </div>
          )}
          <div className="right-area h-full mr-[13px] flex items-center justify-end flex-none">
            <div
              className="moreMenuIcon w-[28px] h-[26px] flex items-center justify-center rounded-md transition cursor-pointer group hover:bg-darkTextColor/[.08] "
              data-no-print="true"
            >
              <div className="w-6 h-6 transition text-darkTextColor/[.7] group-hover:text-darkTextColor">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fillRule="evenodd">
                    <path
                      d="M8.05,12.01 C8.05,11.59 7.90,11.23 7.60,10.94 C7.30,10.64 6.94,10.5 6.51,10.5 C6.09,10.5 5.74,10.64 5.44,10.94 C5.14,11.23 5,11.59 5,12.01 C5,12.29 5.06,12.55 5.20,12.77 C5.34,13.00 5.52,13.18 5.75,13.31 C5.98,13.45 6.23,13.52 6.51,13.52 C6.80,13.52 7.06,13.45 7.29,13.31 C7.52,13.18 7.71,13.00 7.85,12.77 C7.98,12.55 8.05,12.29 8.05,12.01 Z M13.51,12.01 C13.51,11.59 13.36,11.23 13.06,10.94 C12.77,10.64 12.41,10.5 11.99,10.5 C11.57,10.5 11.22,10.64 10.93,10.94 C10.63,11.23 10.48,11.59 10.48,12.01 C10.48,12.29 10.55,12.55 10.69,12.77 C10.82,13.00 11.00,13.18 11.23,13.31 C11.46,13.45 11.72,13.52 11.99,13.52 C12.27,13.52 12.53,13.45 12.76,13.31 C12.99,13.18 13.17,13.00 13.30,12.77 C13.44,12.55 13.51,12.29 13.51,12.01 Z M19,12.01 C19,11.59 18.85,11.23 18.55,10.94 C18.25,10.64 17.90,10.5 17.48,10.5 C17.05,10.5 16.69,10.64 16.39,10.94 C16.09,11.23 15.94,11.59 15.94,12.01 C15.94,12.29 16.01,12.55 16.14,12.77 C16.28,13.00 16.47,13.18 16.70,13.31 C16.93,13.45 17.19,13.52 17.48,13.52 C17.76,13.52 18.01,13.45 18.24,13.31 C18.47,13.18 18.65,13.00 18.79,12.77 C18.93,12.55 19,12.29 19,12.01 Z"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="separator ml-2 mr-3 w-px h-[18px] bg-darkTextColor/[.15] transition"
              data-no-print="true"
            ></div>
            <a
              className="mr-0.5 w-[28px] h-[26px] flex items-start group"
              href="//"
              target="_blank"
              // style="visibility: hidden;"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Artboard-Copy-3"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="transition craftLogo-1 fill-darkTextColor/[.4] group-hover:fill-[#718FCD] group-hover:opacity-100 "
                    d="M12.3421053,19.546127 C12.3421053,19.7967943 12.5453112,20 12.7959782,20 L19.059425,20 C19.3100991,20 19.5147958,19.7962203 19.4991598,19.5460408 C19.2743566,15.9471187 16.3949865,13.0677487 12.7960645,12.8429454 C12.5458849,12.8273095 12.3421053,13.0320062 12.3421053,13.2826802 L12.3421053,19.546127 Z"
                    id="grey"
                    fill=""
                  ></path>
                  <path
                    className="transition craftLogo-2 fill-darkTextColor/[.4] group-hover:fill-[#718FCD] group-hover:opacity-100 "
                    d="M10.6578947,13.2959782 C10.6578947,13.045311 10.4546888,12.8421053 10.2040218,12.8421053 L3.94057498,12.8421053 C3.68990094,12.8421053 3.48520424,13.0458849 3.50084016,13.2960645 C3.72564344,16.8949865 6.60501347,19.7743566 10.2039355,19.9991598 C10.4541151,20.0147958 10.6578947,19.8100991 10.6578947,19.559425 L10.6578947,13.2959782 Z"
                    id="grey-copy"
                    fill=""
                  ></path>
                  <path
                    className="transition craftLogo-3 fill-darkTextColor/[.4] group-hover:fill-[#FF69FF] group-hover:opacity-100 "
                    d="M10.6578947,10.7040218 C10.6578947,10.954689 10.4546888,11.1578947 10.2040218,11.1578947 L3.94057498,11.1578947 C3.68990094,11.1578947 3.48520424,10.9541151 3.50084016,10.7039355 C3.72564344,7.10501347 6.60501347,4.22564344 10.2039355,4.00084016 C10.4541151,3.98520424 10.6578947,4.18990094 10.6578947,4.44057498 L10.6578947,10.7040218 Z"
                    id="pink"
                    fill=""
                  ></path>
                  <path
                    className="transition craftLogo-4 fill-darkTextColor/[.4] group-hover:fill-[#1082FF] group-hover:opacity-100 "
                    d="M12.3421053,4.45387296 C12.3421053,4.20320573 12.5453112,4 12.7959782,4 L19.059425,4 C19.3100991,4 19.5147958,4.20377965 19.4991598,4.45395919 C19.2743566,8.05288126 16.3949865,10.9322513 12.7960645,11.1570546 C12.5458849,11.1726905 12.3421053,10.9679938 12.3421053,10.7173198 L12.3421053,4.45387296 Z"
                    id="blue"
                    fill=""
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ENAV;
