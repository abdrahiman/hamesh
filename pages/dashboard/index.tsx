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
  let handleDelete = async (id: string | null) => {
    console.log("first");
    await fetch("/api/articles/article", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  let [Del, setDel] = useState<null | string>(null);
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
        {Del && (
          <div
            id="popup-modal"
            tabIndex={-1}
            className="fixed left-0 cursor-default h-screen right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 w-full"
          >
            <div className="relative w-full max-w-md max-h-full m-auto">
              <div className="relative top-12 bg-white rounded-lg dark:bg-gray-700 ">
                <button
                  type="button"
                  onClick={() => setDel(null)}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    هل انت متأكد بأنك تريد حذف هذا المقال ؟
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={() => handleDelete(Del)}
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-2 z"
                  >
                    نعم, انا متأكد
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={() => setDel(null)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    لا, الغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <main className="grid grid-cols-2 gap-4 mt-6 max-sm:grid-cols-1 w-full h-full">
          {articles?.data &&
            articles.data.map((ar: any) => (
              <div key={ar._id}>
                <article className="group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5 py-4 pb-10 dark:bg-gray-600">
                  <Link href={"/editor/" + ar._id}>
                    <img
                      alt=""
                      className="w-full h-full object-cover object-center absolute inset-0 opacity-100 group-hover:scale-110 transition duration-200"
                      src={
                        ar.coverUrl ||
                        "https://cdn.pixabay.com/photo/2022/01/25/16/55/iceberg-6966784__340.jpg"
                      }
                    />
                  </Link>

                  <div className="block md-cover absolute inset-0"></div>
                  <button
                    className="left-2 bottom-2 z-20 rounded-full bg-opacity-40 absolute p-2  hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 "
                    onClick={() => setDel(ar._id)}
                  >
                    <MdDelete />
                  </button>
                  <div className="sm-cover absolute inset-0 right-0"></div>
                  <div className="relative mt-auto">
                    <header className="flex flex-col justify-between md:flex-row md:items-baseline">
                      <Link href={"/editor/" + ar._id}>
                        <h2 className="text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100">
                          {ar.title}
                        </h2>
                      </Link>
                      <span className="text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400">
                        <span>Apr 20, 2023</span>
                      </span>
                    </header>
                  </div>
                </article>
              </div>
            ))}
        </main>
      </Container>
    </div>
  );
}

export default Index;
