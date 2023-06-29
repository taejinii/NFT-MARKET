"use client";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
export default function LoginModal() {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 m-auto bg-white border-2 border-black w-96 h-96 drop-shadow-2xl rounded-2xl">
      <header className="flex items-center justify-between w-full p-2 border-b-2">
        <h2>Login Modal</h2>
        <button onClick={() => dispatch(closeModal())} className="p-2">
          x
        </button>
      </header>
    </div>
  );
}
