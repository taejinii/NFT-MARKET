"use client";
import { useState, useEffect, useCallback } from "react";
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
    <div
      className={`flex justify-center items-center ${
        // scrollY >= 50 ? "bg-black opacity-100" : "bg-transparent opacity-0"
        "bg-transparent"
      } transition-all duration-300  w-screen fixed top-0 h-16 z-20`}
    ></div>
  );
}
