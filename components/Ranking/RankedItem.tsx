import Image from "next/image";
import Link from "next/link";
export default function RankedItem({ rank, ...collection }: any) {
  console.log(collection);
  const { volume_eth, name, logo, holder_num, slug } = collection;
  return (
    <Link href={`/collection/${slug}`}>
      <li className="flex items-center py-2 space-x-4 text-sm">
        <div className="flex items-center flex-1 grow-[3]">
          <div className="w-10">{rank}</div>
          <div className="relative w-12 h-12">
            <Image
              src={logo}
              alt="Ranked NFT Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute object-cover rounded-full"
            />
          </div>
          <div className="flex-1 ml-3">{name}</div>
        </div>
        <div className="flex-1 text-right">{volume_eth}E</div>
        <div className="flex-1 text-right">64</div>
        <div className="flex-1 text-right">{holder_num}</div>
        <div className="flex-1 text-right">10000</div>
      </li>
    </Link>
  );
}
