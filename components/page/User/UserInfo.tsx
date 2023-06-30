import { User } from "@/types/types";
import Image from "next/image";
export default function UserInfo({ userInfo }: { userInfo: User }) {
  const { assets } = userInfo;
  return (
    <header className="w-full p-12 mx-auto border-b-2">
      <div className="flex flex-col items-center justify-center w-full gap-10 sm:flex-row">
        <Image
          className="rounded-full grow-[3] drop-shadow-md"
          src="/images/azuki2.avif"
          alt="User Profile Image"
          width={150}
          height={150}
        />
        <h2 className="w-full truncate ">{assets[0].nft.owner_addresses}</h2>
        <button className="px-6 py-3 font-bold border-2 rounded-lg">
          Edit
        </button>
      </div>
    </header>
  );
}
