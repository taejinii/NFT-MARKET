"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/store/index";
import WalletModal from "./WalletModal";
import Overlay from "../Overlay";

const MODAL_TYPES = {
  WalletModal: "WalletModal",
};
const MODAL_COMPONENTS = [
  { type: MODAL_TYPES.WalletModal, component: <WalletModal /> },
];

export default function GlobalModal() {
  const { isOpen, modalType } = useAppSelector((state) => state.modal);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  const findModal = MODAL_COMPONENTS.find((modal) => modal.type === modalType);
  const renderModal = () => findModal?.component;

  return (
    <>
      {isOpen && <Overlay />}
      {isOpen && renderModal()}
    </>
  );
}
