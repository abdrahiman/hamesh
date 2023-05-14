import React, { useState } from "react";
import { sendEmail } from "../utils/email";

export default function CForm() {
  let [isSended, setSend] = useState(false);
  let handleSubmit = async (e: any) => {
    e.preventDefault();
    const init = {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        from: e.target.mail.value,
        name: e.target.name.value,
        text: e.target.message.value,
      }),
    };
    let res = await fetch("/api/sendToGmail", init);
    if (res.status == 200) {
      setSend(true);
    } else {
      setSend(false);
    }
  };
  if (isSended == null) {
    return (
      <h3 className="max-w-screen-md font-bold md:text-lg text-center mx-auto">
        حذث خطأ اثناء ارسال الرسالة
      </h3>
    );
  }
  return isSended ? (
    <h3 className="max-w-screen-md font-bold md:text-lg text-center mx-auto">
      تم ارسال رسالتك بنجاح , سنحاول الرد عليك في اقرب وقت ممكن (:
    </h3>
  ) : (
    <form
      className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto w-full"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          name="name"
          id="name"
          type="text"
          required
          placeholder="الأسم"
          className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
        />
      </div>
      <div>
        <input
          name="email"
          id="mail"
          type="text"
          required
          placeholder="بريدك الإلكتروني"
          className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
        />
      </div>
      <div className="sm:col-span-2">
        <textarea
          name="message"
          id="message"
          required
          placeholder="محتوى الرسالة"
          className="h-64 block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
        ></textarea>
      </div>
      <div className="sm:col-span-2 flex justify-between items-center">
        <button
          type="submit"
          className="inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >
          <p className="text-gray-400 h-5">راسلنا</p>
        </button>
        <p className="mb-2 text-gray-400 text-xs">
          * يمكن ملء معلومات الاتصال الأخرى الصالحة
        </p>
      </div>
    </form>
  );
}
