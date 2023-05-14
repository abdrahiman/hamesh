import React, {
  useCallback,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
// import SimpleMDEditor from "react-simplemde-editor";
import dynamic from "next/dynamic";
import { EditorContext } from "../../context/edioreProvider";

// import Highlight.js and just the languages you need
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import editorIcons from "./editorToolsIcons";
hljs.registerLanguage("javascript", javascript);

const SimpleMDEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
const MdEditor = () => {
  let { editorData, setEditorData } = useContext(EditorContext);
  const handler = () => {
    let btns = document.querySelectorAll(".editor-toolbar button");
    if (btns) {
      btns.forEach((el: any) => {
        let svg = editorIcons[`${el.className.split(" ")[0]}`];
        if (!svg) return;
        el.innerHTML = svg;
      });
    }
  };
  useEffect(() => {
    console.log("run");
    handler();
  }, []);
  const onChange = useCallback((value: string) => {
    setEditorData((prv: any) => ({ ...prv, markdown: value }));
  }, []);

  useEffect(() => {
    if (!document.querySelector("code")) return;
    document.querySelectorAll("pre button.copy").forEach((el) => el.remove());
    document.querySelectorAll("code").forEach((c: any) => {
      c.setAttribute("className", "js");
      let Btn: any = document.createElement("button");
      Btn.className = "copy";
      Btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" width="1em" version="1.1"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>`;
      c.parentElement.appendChild(Btn);
      Btn.onclick = () => {
        navigator.clipboard.writeText(
          Btn.parentElement.firstElementChild.textContent
        );
        Btn.classList.add("copied");
        setTimeout(() => Btn.classList.remove("copied"), 3000);
      };
      hljs.highlightElement(c);
    });
  }, [editorData]);
  return (
    <>
      <SimpleMDEditor
        id="mdEditor"
        options={{
          // toolbar: false,
          toolbar: [
            "bold",
            "italic",
            "heading",
            "|",
            "quote",
            "link",
            "image",
            "|",
            "code",
            "preview",
            "fullscreen",
            "|",
            "guide",
          ],
          spellChecker: false,
          direction: "rtl",
          autofocus: true,
          placeholder: "ابدأ الكتابة من هنا ...",
        }}
        value={editorData.markdown || ""}
        onChange={onChange}
      />
    </>
  );
};

export default MdEditor;
