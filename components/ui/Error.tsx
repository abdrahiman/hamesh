import React from "react";

export default function Error({ message }: { message?: string }) {
  return (
    <h3 className="max-w-screen-md font-bold md:text-lg text-center mx-auto">
      {message ? message : "حدث خطأ ما"}
    </h3>
  );
}
