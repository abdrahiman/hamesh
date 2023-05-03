import React, { useEffect, useState } from "react";
import Link from "next/link";
import ContentTable from "../components/post/contentTable";
import Container from "../components/Container";
import PostHeader from "../components/headers/postHeader";
import { useRouter } from "next/router";
import useSWR from "swr";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};

// import Highlight.js and just the languages you need
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export async function getServerSideProps(ctx: any) {
  return { props: { postUrl: decodeURIComponent(`${ctx.resolvedUrl}`) } };
}
export default function FullPost({ slug }: { slug: string }) {
  let {
    data: article,
    error,
    isLoading,
  } = useSWR("/api/articles/" + slug, fetcher);

  useEffect(() => {
    if (document.querySelector(".prview code") === undefined) return;
    document.querySelectorAll("pre button.copy").forEach((el) => el.remove());
    document.querySelectorAll("code").forEach((c: any) => {
      c.setAttribute("className", "js");
      let Btn: any = document.createElement("button");
      Btn.className = "copy";
      Btn.innerHTML = `<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="w-8 h-8"><path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path><path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path></svg>`;
      c.parentElement.appendChild(Btn);
      Btn.onclick = () => {
        navigator.clipboard.writeText(
          Btn.parentElement.firstElementChild.textContent
        );
        console.log(Btn.parentElement.firstElementChild.textContent);
        Btn.classList.add("copied");
        setTimeout(() => Btn.classList.remove("copied"), 3000);
      };
      hljs.highlightElement(c);
    });
  }, []);
  let r = useRouter();
  // useEffect(() => {
  //   // console.log(data?._id, post?.author?._id);
  //   const elements = document.querySelectorAll("");
  //   if (!elements) return;
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setH(entry.target.textContent);
  //   });
  //   elements.forEach((elem) => observer.observe(elem));
  //   return () => observer?.disconnect();
  // }, [post]);
  return (
    <Container
      customMeta={{
        title: article?.title || "",
        description: article?.description || "",
        type: "article",
      }}
      // date={new Date(frontMatter.publishedAt).toISOString()}
    >
      <PostHeader />
      <article className="content">
        <h2>المقدمة :</h2>
        <p>
          الـ JWT سيحتاج منك بعض لأشياء لكي ينشيء الـ token منها البيانات التي
          تريد تشفيرها بالطبع والـ Secret، هي جملة تبتكرها لتكون لكلمة سر تستخدم
          في التشفير لتزيد من قوة التشفير ويتحسن أن نعطيه تاريخ انتهاء صلاحية
          هذا الـ token لضمان حماية المستخدم بشكل افضل، عن طريق انه يجدد الـ
          token كل فترة
        </p>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: `// backend
const SECRET_KEY = 'هذه كلمة سر للتشفير بالغة السرية، لا تشاركها مع أحد';
const token = jwt.sign(user, SECRET_KEY, {
  expiresIn: 60 * 60 * 24, // 1 day
});

console.log(token);`,
            }}
          ></code>
        </pre>
        <h3>ثانيًا الـ payload</h3>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <img
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2385af9c-2f88-4358-9ee7-063198224444%2FUntitled.png?table=block&id=28fb0b5c-1a1c-43cf-a05d-563a919e687d&cache=v2"
          alt=""
        />
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
        <p>
          بعد ما عرفنا كيف يتكون الـ token الآن دعونا نعرف كيف نستعمله بشكل عملي
          وكيف يكون الأمر في المشاريع الكبيرة الـ frontend سيستقبل بيانات
          المستخدم ثم يرسلها للـ backend ثم يقوم الـ backend بعمل الـ token
          ويرسلها للـ frontend يستقبل الـ frontend الـ token ويخزن في أي مكان في
          المتصفح مثلا في session
        </p>
      </article>
    </Container>
  );
}
