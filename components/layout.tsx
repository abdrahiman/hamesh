import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import MyNav from "./nav";
export default function Layout({ children }: { children: any }) {
  let r = useRouter();
  return (
    <>
      {r.route != "/editor" && <MyNav />}
      {children}
      {r.route != "/editor" && <Footer />}
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
