"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useAppDispatch } from "@/store";
import { openModal } from "@/store/modalSlice";
import { NAVBAR_MENU } from "@/constant/constant";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { disconnect } from "@wagmi/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const handleDisconnect = async () => {
    await disconnect();
  };
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isConnected = localStorage.getItem("wagmi.connected");
  const dispatch = useAppDispatch();
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
  const handleModalOpen = () => {
    dispatch(openModal({ modalType: "WalletModal" }));
  };
  return (
    <nav
      className={`flex justify-between font-bold  text-2xl text-black items-center w-full responsive-container drop-shadow  fixed top-0 h-16 z-30 duration-300  ${
        scrollY !== 0 || isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <Link href={"/"} className="text-[#0D82F9]">
        QWERO
      </Link>
      <ul className="justify-around hidden gap-10 sm:flex">
        {NAVBAR_MENU.map((menu) => {
          return (
            <li key={menu.title}>
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <ul className="absolute top-0 left-0 flex flex-col w-full h-screen p-2 mt-16 bg-white sm:hidden">
          {NAVBAR_MENU.map((menu) => {
            return (
              <li
                key={menu.title}
                className="flex p-4 text-center rounded-md active:bg-slate-200"
              >
                <Link
                  href={menu.url}
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <button className="sm:hidden" onClick={handleIsOpen}>
        <FiMenu size={30} />
      </button>
      <div className="hidden sm:block">
        {/* <button onClick={handleDisconnect}>disconnect</button>
        {isConnected ? (
          <Image
            src="/images/azuki2.avif"
            alt="profileImage"
            width={50}
            height={50}
            className="rounded-full drop-shadow-md"
          />
        ) : (
          <button onClick={handleModalOpen}>
            <ConnectButton />
          </button>
        )} */}
        <ConnectButton />
      </div>
    </nav>
  );
}
