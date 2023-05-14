import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import ENAV from "../../components/editor/nav";
import MdEditor from "../../components/editor/mdEditor";
import { useRouter } from "next/router";
import Link from "next/link";
import { EditorContext } from "../../context/edioreProvider";
import { remark } from "remark";
import html from "remark-html";
import { toast } from "react-toastify";
import Header from "../../components/editor/header";
import useSWR from "swr";
import Spinner from "../../components/spinner";
import Error from "../../components/Error";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};

export async function getServerSideProps(ctx: any) {
  return { props: { id: ctx.query.id } };
}
interface IPost {
  title: "";
  content: "";
  markdown: "";
  isDraft: boolean;
  description: "";
  coverUrl: "";
  tags: [];
}
export default function Editor({ id }: { id: string }) {
  let r = useRouter();
  let { editorData, setEditorData } = useContext(EditorContext);

  let [article, setArt] = useState<IPost | null | false>(null);
  useEffect(() => {
    let getArticle = async () => {
      let res = await fetch("/api/articles/article?id=" + id);
      let data: IPost = await res.json();
      if (res.ok) {
        localStorage.removeItem("editorData");
        setEditorData({
          title: data.title || "",
          content: data.content || "",
          markdown: data.markdown || "",
          isDraft: data.isDraft || true,
          description: data.description || "",
          coverUrl: data.coverUrl || "",
          tags: data.tags || [],
        });
        setArt(data);
      } else {
        setArt(false);
      }
    };
    if (!article) getArticle();
  }, [article]);

  let handleUpdateArticle = async () => {
    const processedContent = await remark()
      .use(html)
      .process(editorData.markdown);
    const contentHtml = processedContent.toString();
    setEditorData((prv: any) => ({ ...prv, content: contentHtml }));

    let req = await fetch("/api/articles/article", {
      method: "PUT",
      body: JSON.stringify({
        id,
        articleData: {
          ...editorData,
          content: contentHtml,
          isDraft: false,
          slug: editorData.title.trim().replaceAll(" ", "-"),
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // let data = await req.json();
    if (!req.ok) {
      toast.error("حدث خطأ ما");
    } else {
      toast.success("تم التعديل بنجاح");
      localStorage.removeItem("editorData");
      setEditorData({
        title: "",
        content: "",
        markdown: "",
        isDraft: true,
        description: "",
        coverUrl: "",
        tags: [],
      });
      r.push("/dashboard");
    }
  };

  // let saveBtn = useRef(null);
  useEffect(() => {
    let int: any;
    if (article) {
      if (article.isDraft) {
        int = setInterval(() => {
          let btn: HTMLButtonElement | null =
            document.querySelector("button.draft");
          if (btn) {
            btn.click();
            console.log("saved");
          }
        }, 40000);
      }
    }
    return () => clearInterval(int);
  }, [article]);
  let handleUpdateDraft = async () => {
    const processedContent = await remark()
      .use(html)
      .process(editorData.markdown);
    const contentHtml = processedContent.toString();
    setEditorData((prv: any) => ({ ...prv, content: contentHtml }));

    let req = await fetch("/api/articles/article", {
      method: "PUT",
      body: JSON.stringify({
        id,
        articleData: {
          ...editorData,
          isDraft: true,
          content: contentHtml,
          slug: editorData.title.trim().replaceAll(" ", "-"),
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // let data = await req.json();
    if (!req.ok) {
      toast.error("حدث خطأ ما");
    } else {
      let btn = document.querySelector("button.draft");
      if (!btn) return;
      btn.textContent = " ✅ تم الحفظ";
      setTimeout(() => {
        if (!btn) return;
        btn.textContent = "حفظ التعديل كمسودة";
      }, 5000);
    }
  };
  if (article === null) {
    return <Spinner />;
  }
  if (article === false) {
    return (
      <Container className="pt-12">
        <Error />
      </Container>
    );
  } else {
    return (
      <div className="editor">
        <ENAV />
        <Container>
          <Header />
          <MdEditor />
          <footer className="my-6 w-full flex justify-between items-center">
            <Link href={"/dashboard"} className="">
              <div className="flex justify-between gap-2 px-6 py-2 hover:opacity-60 font-medium rounded-lg items-center transition">
                <svg
                  className="rotate-180"
                  width="20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height="16px"
                  viewBox="0 0 20 16"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    fillOpacity="1"
                  >
                    <g
                      id="Web"
                      transform="translate(-705.00, -1312.00)"
                      fill="rgb(117,117,117)"
                      fillRule="nonzero"
                    >
                      <path d="M705.94,1319.93 C705.94,1319.63 706.06,1319.34 706.29,1319.12 L712.70,1312.71 C712.96,1312.46 713.22,1312.36 713.51,1312.36 C714.12,1312.36 714.57,1312.80 714.57,1313.39 C714.57,1313.70 714.45,1313.97 714.25,1314.16 L712.05,1316.39 L709.23,1318.98 L711.49,1318.84 L723.33,1318.84 C723.97,1318.84 724.42,1319.29 724.42,1319.93 C724.42,1320.57 723.97,1321.02 723.33,1321.02 L711.49,1321.02 L709.22,1320.88 L712.05,1323.47 L714.25,1325.70 C714.45,1325.89 714.57,1326.16 714.57,1326.47 C714.57,1327.06 714.12,1327.50 713.51,1327.50 C713.22,1327.50 712.97,1327.40 712.73,1327.17 L706.29,1320.74 C706.06,1320.52 705.94,1320.23 705.94,1319.93 Z"></path>
                    </g>
                  </g>
                </svg>
                <div className="">حفظ و الرجوع</div>
              </div>
            </Link>
            <div className="flex gap-4">
              <button
                className="px-6 py-2 font-medium rounded-lg transition draft"
                // ref={saveBtn}
                onClick={handleUpdateDraft}
              >
                احفظ تعديل كمسودة
              </button>
              <button
                onClick={handleUpdateArticle}
                className="px-8 py-2 font-medium vbg rounded-lg transition"
              >
                تعديل المقال
              </button>
            </div>
          </footer>
        </Container>
      </div>
    );
  }
}
