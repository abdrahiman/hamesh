import { getServerSession } from "next-auth";
import { getProviders, getSession, signIn, signOut } from "next-auth/react";
const fetcher = async (url: string | Request) => {
  const res = await fetch(url);
  return res.json();
};
import useSwr from "swr";
import React, { useState } from "react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Spinner from "../components/spinner";

export async function getServerSideProps(context: any) {
  const { req } = context;
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
interface IAuth {
  providers: {};
}

// dont make a commponnent function async
const Auth = ({ providers }: IAuth) => {
  let [loading, setLod] = useState<string>("");
  let authButton = async (id: string) => {
    setLod(id);
    signIn(id).catch((err) => {
      toast.error("error happend, please try again: ", err);
    });
    setLod("");
  };
  let { data: user, isLoading, error } = useSwr("/api/getUser", fetcher);
  if (isLoading && !user) {
    return <Spinner />;
  }

  return (
    <div className="auth flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {!user?.email ? (
        <div className="w-full flex flex-col items-center max-w-md gap-6">
          <div className="flex flex-col items-center gap-8 ">
            <img src="/favicon.ico" alt="" className="h-12" />
            <h2 className="mt-4 mb-3 text-center text-3xl font-bold tracking-tight text-gray-900 ">
              Sign in to your account
            </h2>
          </div>
          {providers &&
            Object.values(providers).map((provider: any) => {
              if (provider.name !== "Credentials") {
                return (
                  <a
                    key={provider.id}
                    className={`max-w-sm mx-auto w-full h-12 rounded-md flex justify-center gap-3 items-center hover:bg-black cursor-pointer hover:text-white hover:scale-95 transition-all ${
                      loading
                        ? loading == provider.id
                          ? "opacity-50 bg-black text-white scale-95"
                          : "pointer-events-none cursor-not-allowed opacity-90"
                        : ""
                    }`}
                    onClick={() => authButton(provider.id)}
                  >
                    {provider.id === "github" ? (
                      <IoLogoGithub className="w-6 h-6" />
                    ) : provider.id === "twitter" ? (
                      <IoLogoTwitter className="w-6 h-6" />
                    ) : (
                      <FcGoogle className="w-6 h-6" />
                    )}
                    {provider.id}
                  </a>
                );
              }
            })}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center max-w-md gap-6">
          <div className="flex flex-col items-center gap-8 ">
            <img src="/favicon.ico" alt="" className="h-12" />
            <h2 className="mt-4 mb-3 text-center text-3xl font-bold tracking-tight text-gray-900 ">
              you aleardy Logged in
            </h2>
          </div>
          <a
            className={`max-w-sm mx-auto w-full h-12 rounded-md flex justify-center gap-3 items-center hover:bg-black cursor-pointer hover:text-white hover:scale-95 transition-all `}
            onClick={() => signOut()}
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};

export default Auth;
