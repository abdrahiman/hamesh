import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import ENAV from "./editor/nav";
import Footer from "./footer";
import MyNav from "./nav";
export default function Layout({ children }: { children: any }) {
  let r = useRouter();
  let c =
    r.route == "/editor" ||
    r.route == "/dashboard" ||
    r.route == "/editor/[id]";

  return (
    <>
      {c ? <ENAV /> : <MyNav />}
      {children}
      {!c && <Footer />}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
