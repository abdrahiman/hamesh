import Layout from "../components/layout";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import EditorProvider from "../context/edioreProvider";
import "highlight.js/styles/night-owl.css";
import "easymde/dist/easymde.min.css";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "moment/locale/ar";
import Script from "next/script";
import BLOG from "../BLOG.config";
import * as gtag from "../lib/gtag";
import NextProgress from "next-progress";

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.25,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.25,
    },
  },
};
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { asPath } = useRouter();
  useEffect(() => {
    document.body.className = "bg-day dark:bg-night";
    document.querySelector(":root")?.setAttribute("lang", "ar");
  });
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (BLOG.isProd) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // eslint-disable-next-
  return (
    <>
      <SessionProvider session={session}>
        <EditorProvider>
          <Layout>
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <NextProgress
                color={BLOG.primaryColor}
                options={{ showSpinner: BLOG.showLoadingSpinner }}
              />
              <motion.div
                key={asPath}
                variants={variants}
                animate="in"
                initial="out"
                exit="out"
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </EditorProvider>
      </SessionProvider>
    </>
  );
}
