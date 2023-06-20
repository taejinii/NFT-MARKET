"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const handleScrollY = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", handleScrollY, { passive: true });
    return () => document.removeEventListener("scroll", handleScrollY);
  }, [handleScrollY]);
  return (
    <nav
      className={`flex justify-between font-bold font-sans text-2xl text-black items-center w-full responsive-container fixed top-0 h-16 z-50 duration-300 drop-shadow-md ${
        scrollY !== 0 ? "bg-white" : "bg-transparent"
      }`}
    >
      <Link href={"/"} className="text-[#0D82F9]">
        QWERO
      </Link>
      <ul className="flex justify-around invisible gap-10 md:visible">
        <Link href={"/collection"}>Collection</Link>
        <Link href={"/"}>Menu1</Link>
        <Link href={"/"}>Menu1</Link>
      </ul>
      <div>Login</div>
    </nav>
  );
}
