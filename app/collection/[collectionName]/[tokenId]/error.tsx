"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10 ">
      <h1 className="">유효하지 않은 NFT 입니다. 다른 NFT를 선택해주세요.</h1>
      <button
        className="p-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={() => router.back()}
      >
        뒤로가기
      </button>
    </div>
  );
}
