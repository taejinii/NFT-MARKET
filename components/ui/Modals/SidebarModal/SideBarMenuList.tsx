import { NAVBAR_MENU } from "@/constant/constant";
import { useAppDispatch } from "@/store";
import { closeModal } from "@/store/modalSlice";
import Link from "next/link";
export default function SideBarMenuList() {
  const dispatch = useAppDispatch();
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {NAVBAR_MENU.map((menu) => {
        return (
          <Link
            key={menu.title}
            href={menu.url}
            className="p-4 font-bold border-2 rounded-xl hover:bg-slate-200"
            onClick={() => dispatch(closeModal())}
          >
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
}
