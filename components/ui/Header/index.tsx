"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { NAVBAR_MENU } from "@/constant/constant";
import WalletConnectButton from "../WalletConnectButton";
import MenuBar from "../../../public/icons/MenuBar.svg";
/**모바일 뷰포트이기 전까진 사용할일이 없기때문에 처음부터 로드하지않고 필요해짐에따라 로드하여 렌더링해준다. 앱의 초기용량을 줄일수가있다.
 */
const MobileNavBar = dynamic(() => import("../Header/MobileNavBar"));
export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleScrollY = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", handleScrollY, { passive: true });
    return () => document.removeEventListener("scroll", handleScrollY);
  }, [handleScrollY]);

  const handleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav
      className={`flex justify-between font-bold  text-2xl text-black items-center w-full responsive-container drop-shadow  fixed top-0 h-16 z-30 duration-300  ${
        scrollY !== 0 || isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <Link href={"/"} className="text-[#0D82F9]">
        QWERO
      </Link>
      <ul className="justify-around hidden gap-5 sm:flex">
        {NAVBAR_MENU.map((menu) => {
          return (
            <li key={menu.title} className="p-2 rounded-md hover:bg-slate-200">
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          );
        })}
      </ul>
      {isOpen && <MobileNavBar setIsOpen={setIsOpen} />}
      <div className="flex gap-5">
        <WalletConnectButton />
        <button className="block sm:hidden" onClick={handleIsOpen}>
          <MenuBar className="w-8 h-8 fill-black" />
        </button>
      </div>
    </nav>
  );
}
