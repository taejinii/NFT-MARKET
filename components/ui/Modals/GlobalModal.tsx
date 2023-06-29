"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/store/index";
import LoginModal from "./LoginModal";
import Overlay from "../Overlay";

const MODAL_TYPES = {
  LoginModal: "LoginModal",
};
const MODAL_COMPONENTS = [
  { type: MODAL_TYPES.LoginModal, component: <LoginModal /> },
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
