import React, { useState, useEffect } from "react";

function ContentTable() {
  let [content, setCon] = useState(true);
  let [hs, setH] = useState<[string] | []>([]);
  useEffect(() => {
    const elements = document.querySelectorAll("h2");
    let data: [string] | [] = [];
    elements.forEach((el: any) => {
      let st: string = el.textContent || "";
      el.id = st.replaceAll(" ", "-");
      data.push(st);
    });
    setH(data);
  }, []);
  // useEffect(() => {
  //   // console.log(data?._id, post?.author?._id);
  //   const elements = document.querySelectorAll("h2");
  //   if (!elements) return;
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setH(entry.target.textContent || "");
  //   });
  //   elements.forEach((elem) => observer.observe(elem));
  //   return () => observer?.disconnect();
  // }, [post]);
  return (
    <div className="flex flex-col gap-2 items-center w-full content-table">
      <div
        onClick={() => setCon((content) => !content)}
        className="i mb-1 flex flex-row w-full justify-between cursor-pointer items-center"
      >
        <h4 className="text-lg">الفهرس :</h4>
        <svg
          className={`svg-inline--fa w-4 h-4 fa-chevron-up transition ${
            content ? "" : "rotate-180"
          }`}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            data-darkreader-inline-fill=""
          ></path>
        </svg>
      </div>
      {content && (
        <>
          {hs &&
            hs.map((el: any, i) => (
              <a
                key={i}
                href={"#" + el.replaceAll(" ", "-")}
                className="notion-table-of-contents-item"
              >
                <span className="notion-table-of-contents-item-body inline-block mr-0">
                  {el}
                </span>
              </a>
            ))}
        </>
      )}
    </div>
  );
}

export default ContentTable;
