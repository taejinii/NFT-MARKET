import Image from "next/image";
import Link from "next/link";
export default function SideBarUserInfo({ address }: { address?: string }) {
  return (
    <div className="flex items-center w-full gap-5">
      <Image
        src="/images/azuki2.avif"
        alt="ProfileImage"
        width={80}
        height={80}
        priority
        className="rounded-full"
      />
      <div className="font-bold truncate">{address}</div>
      <Link
        href={`/user/${address}`}
        className="p-2 font-bold border-2 rounded-full hover:bg-slate-200"
      >
        My
      </Link>
    </div>
  );
}
