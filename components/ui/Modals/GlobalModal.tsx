"use client";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/index";
import { usePathname } from "next/navigation";
import { closeModal } from "@/store/modalSlice";
import CartListModal from "./CartListModal";
import Overlay from "../Overlay";
import SideBarModal from "./SidebarModal/SideBarModal";
const MODAL_TYPES = {
  SideBarModal: "SideBarModal",
  CartListModal: "CartListModal",
};
const MODAL_COMPONENTS = [
  { type: MODAL_TYPES.SideBarModal, component: <SideBarModal /> },
  { type: MODAL_TYPES.CartListModal, component: <CartListModal /> },
];

export default function GlobalModal() {
  const { isOpen, modalType } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  useEffect(() => {
    dispatch(closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
