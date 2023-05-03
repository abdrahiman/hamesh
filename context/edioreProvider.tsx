import { createContext, useState, useEffect } from "react";

export const EditorContext = createContext({
  editorData: {
    title: "",
    content: "",
    markdown: "",
    isDraft: true,
    description: "",
    coverUrl: "",
    tags: [],
  },
  setEditorData: (v: any) => {},
});
export default function EditorProvider({ children }: { children: any }) {
  const [editorData, setEditorData] = useState({
    title: "",
    content: "",
    markdown: "",
    isDraft: true,
    description: "",
    coverUrl: "",
    tags: [],
  });
  let [isLoad, isDataLoad] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("editorData")) {
      setEditorData(JSON.parse(localStorage.getItem("editorData") || ""));
    }
    isDataLoad(true);
  }, []);

  useEffect(() => {
    if (!isLoad) return;
    localStorage.setItem("editorData", JSON.stringify(editorData));
    console.log(editorData);
  }, [editorData]);

  return (
    <EditorContext.Provider value={{ editorData, setEditorData }}>
      {children}
    </EditorContext.Provider>
  );
}
