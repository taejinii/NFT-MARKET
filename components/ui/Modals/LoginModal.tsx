"use client";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { signIn } from "next-auth/react";
export default function LoginModal() {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 m-auto bg-white border-2 border-black w-1/3 h-2/3 [drop-shadow-2xl rounded-2xl">
      <header className="flex items-center justify-between w-full p-2 border-b-2">
        <h2>Login Modal</h2>
        <button onClick={() => dispatch(closeModal())} className="p-2">
          x
        </button>
      </header>
      <button onClick={() => signIn("google")}>구글 로그인</button>
    </div>
  );
}
