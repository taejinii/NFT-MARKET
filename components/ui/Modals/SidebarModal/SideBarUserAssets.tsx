import Image from "next/image";
import Ethereum from "../../../../public/icons/ethereum.svg";
interface Asset {
  data?:
    | {
        formatted: string;
        symbol: string;
      }
    | undefined;
}
export default function SideBarUserAssets({ data }: Asset) {
  return (
    <div className="flex flex-col w-full p-4 border-2 rounded-xl">
      <header className="w-full font-bold uppercase border-b-2">
        <span>wallet</span>
      </header>
      <div className="flex items-center w-full gap-2 py-2">
        <Ethereum className="w-10 h-10 rounded-full drop-shadow-md" />
        <div className="flex flex-col flex-1">
          <p className="text-lg font-bold">{data?.symbol}</p>
          <p className="text-sm text-gray-300 uppercase">ethereum</p>
        </div>
        <div className="font-bold">{Number(data?.formatted).toFixed(4)}</div>
      </div>
    </div>
  );
}
