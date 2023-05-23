import useSWR from "swr";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};
export const Statistic = ({ articles }: { articles: [] }) => {
  let {
    data: users,
    error,
    isLoading,
  } = useSWR("/api/getSession?all=true", fetcher);
  let getWords = (data: any) => {
    let words = 0;
    data.forEach(
      (art: any) => (words = words + art.markdown.split(" ").length)
    );
    return words;
  };
  return (
    <div className="px-0 py-16 mx-auto w-full">
      <div className="grid gap-10 w-full row-gap-8 lg:grid-cols-4">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {articles?.filter((art: any) => art.likes != undefined)?.length ||
                "..."}
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 dark:text-teal-400  w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">مقال</p>
          <p className="text-gray-700 dark:text-gray-400">ساضيف هدا لاحقا</p>
        </div>

        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {articles?.filter((art: any) => art.likes == undefined)?.length ||
                "..."}
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 dark:text-teal-400 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">مسودة</p>
          <p className="text-gray-700 dark:text-gray-400">ساضيف هدا لاحقا</p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {users?.data?.length || "..."}
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 dark:text-teal-400 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">مستخدم</p>
          <p className="text-gray-700 dark:text-gray-400">ساضيف هدا لاحقا</p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
              {articles ? getWords(articles) : "..."}
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 dark:text-teal-400 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">كلمة</p>
          <p className="text-gray-700 dark:text-gray-400">ساضيف هدا لاحقا</p>
        </div>
      </div>
    </div>
  );
};
