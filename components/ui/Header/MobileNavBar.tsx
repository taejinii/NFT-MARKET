import { NAVBAR_MENU } from "@/constant/constant";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
export default function MobileNavBar({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul className="absolute top-0 left-0 flex flex-col items-center w-full h-screen p-2 mt-16 bg-white sm:hidden">
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
  );
}
