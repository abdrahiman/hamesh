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
import Spinner from "../components/ui/spinner";
import Image from "next/image";
import Container from "../components/Container";

export async function getServerSideProps(context: any) {
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
  let { data: user, isLoading, error } = useSwr("/api/getSession", fetcher);
  if (isLoading && !user) {
    return <Spinner />;
  }

  return (
    <Container>
      {!user?.data ? (
        <div className="w-full flex flex-col items-center max-w-md gap-6">
          <div className="flex flex-col items-center gap-8 ">
            <Image
              src="/logo.svg"
              alt=""
              className="h-12"
              height={48}
              width={70}
            />
            <h2 className="mt-4 mb-3 text-center text-3xl font-bold tracking-tight ">
              تسجيل الدخول لحسابك
            </h2>
          </div>
          {providers &&
            Object.values(providers).map((provider: any) => {
              if (provider.name !== "Credentials") {
                return (
                  <a
                    key={provider.id}
                    className={`max-w-sm mx-auto w-full h-12 rounded-md flex justify-center gap-3 items-center hover:bg-night dark:hover:bg-day text-day dark:hover:text-night hover:scale-95 transition-all ${
                      loading
                        ? loading == provider.id
                          ? "opacity-50 bg-night dark:bg-day text-day dark:text-night scale-95"
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
            <Image
              src="/logo.svg"
              alt=""
              className="h-12"
              height={48}
              width={70}
            />
            <h2 className="mt-4 mb-6 text-center text-3xl font-bold tracking-tight  ">
              مرحبا {user.data?.name}, انت مسجل بالفعل
            </h2>
          </div>
          <a
            className={`max-w-sm mx-auto w-full h-12 rounded-md flex justify-center gap-3 items-center font-medium hover:bg-night dark:hover:bg-day text-night  hover:text-white dark:hover:text-dark cursor-pointer hover:scale-95 transition-all `}
            onClick={() => signOut()}
          >
            تسجيل الخروج
          </a>
        </div>
      )}
    </Container>
  );
};

export default Auth;
