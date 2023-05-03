import React, { useState } from "react";

function ContentTable() {
  let [content, setCon] = useState(true);

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
          <a
            href="#ea09f944085f476abd506078877553ae"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              快速部署
            </span>
          </a>
          <a
            href="#3680ac76a5204ffd944b728b466ca17f"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              文章大纲
            </span>
          </a>
          <a
            href="#df4a979d89be496da9ea3a0d2b84f36e"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              多语言
            </span>
          </a>
          <a
            href="#2e0b94f70d444b62b5308aa30888701d"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              子页面和外部页面解析
            </span>
          </a>
          <a
            href="#e2784ed97898411dbf232c962d8f8272"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              周刊 Newsletter
            </span>
          </a>
          <a
            href="#099510b380074392a092885200fd8aaf"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              评论区
            </span>
          </a>
          <a
            href="#17e4a025c9194603bffeff8fe9d670ff"
            className="notion-table-of-contents-item"
          >
            <span className="notion-table-of-contents-item-body inline-block mr-0">
              联系表单
            </span>
          </a>
        </>
      )}
    </div>
  );
}

export default ContentTable;
