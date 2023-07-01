"use client";
import { useRef } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
import { motion } from "framer-motion";
import useOutsideClick from "@/hooks/common/useOutSideCliecnk";
import SideBarMenuList from "./SideBarMenuList";
import SideBarUserAssets from "./SideBarUserAssets";
import SideBarUserInfo from "./SideBarUserInfo";
export default function SideBarModal() {
  const ref = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const { disconnect } = useDisconnect({
    onSuccess(data) {
      dispatch(closeModal());
    },
  });
  useOutsideClick(ref);

  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={`fixed right-0 z-50 flex flex-col w-full h-full gap-5 p-4 bg-white sm:w-96`}
      ref={ref}
    >
      <header className="flex justify-end w-full">
        <button
          onClick={() => dispatch(closeModal())}
          className="p-2 text-3xl font-bold"
        >
          X
        </button>
      </header>
      <SideBarUserInfo address={address} />
      <SideBarMenuList />
      <SideBarUserAssets data={data} />
      <button
        onClick={() => disconnect()}
        className="p-4 text-white bg-[#0D82F9] font-bold text-xl rounded-xl hover:brightness-125"
      >
        Disconnect
      </button>
    </motion.aside>
  );
}
