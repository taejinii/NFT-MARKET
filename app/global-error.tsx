"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10 ">
      <h1 className="">페이지 오류가 발생하였습니다.</h1>
      <button
        className="p-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={() => reset()}
      >
        새로고침
      </button>
    </div>
  );
}
