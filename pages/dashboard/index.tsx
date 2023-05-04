import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Container from "../../components/Container";
import Link from "next/link";
import useSWR from "swr";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};

function Index() {
  let {
    data: articles,
    error,
    isLoading,
  } = useSWR("/api/articles?all=true", fetcher);
  useEffect(() => {
    console.log(articles);
  }, [articles]);
  let handleDelete = async (id: string) => {
    await fetch("/api/articles/article", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <div className="dashboard w-full h-full">
      <Container>
        <header className="w-full mt-24 flex justify-start items-start  flex-col">
          <h1 className="text-3xl font-semibold mb-6">
            مرحبا عبد الرحيم, كيف حالك ؟
          </h1>
          <hr />
          <div className="flex justify-between w-full items-center">
            <h2 className="text-lg font-medium">المنشورات:</h2>
            <button className="px-4 py-1 font-medium rounded-lg transition">
              <Link href={"/editor"}>كتابة منشور</Link>
            </button>
          </div>
        </header>
        <main className="grid grid-cols-2 gap-4 mt-6 max-sm:grid-cols-1 w-full h-full">
          {articles?.data &&
            articles.data.map((ar: any) => (
              <div key={ar._id}>
                <Link href={"/editor/" + ar._id}>
                  <article className="group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5 py-4 pb-10 dark:bg-gray-600">
                    <img
                      alt=""
                      className="w-full h-full object-cover object-center absolute inset-0 opacity-100 group-hover:scale-110 transition duration-200"
                      src="https://cdn.pixabay.com/photo/2022/01/25/16/55/iceberg-6966784__340.jpg"
                    />
                    <div className="block md-cover absolute inset-0"></div>
                    <button
                      className="left-2 bottom-2 z-20 rounded-full hover:bg-slate-400 bg-opacity-40 absolute p-2"
                      onClick={() => handleDelete(ar._id)}
                    >
                      <MdDelete />
                    </button>
                    <div className="sm-cover absolute inset-0 right-0"></div>
                    <div className="relative mt-auto">
                      <header className="flex flex-col justify-between md:flex-row md:items-baseline">
                        <h2 className="text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100">
                          {ar.title}
                        </h2>
                        <span className="text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400">
                          <span>Apr 20, 2023</span>
                        </span>
                      </header>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
        </main>
      </Container>
    </div>
  );
}

export default Index;
