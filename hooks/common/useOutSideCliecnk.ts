import { RefObject, useEffect } from "react";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
const useOutsideClick = (ref: RefObject<HTMLElement>, closeFn?: () => void) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const clickOutSide = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (closeFn) {
          closeFn();
        } else {
          dispatch(closeModal());
        }
      }
    };
    window.addEventListener("mousedown", clickOutSide);
    return () => {
      window.removeEventListener("mousedown", clickOutSide);
    };
  }, [ref, closeFn, dispatch]);
};
export default useOutsideClick;
