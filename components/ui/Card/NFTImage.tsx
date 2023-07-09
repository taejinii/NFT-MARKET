import Image from "next/image";
export default function NFTImage({ image }: { image: string }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-xl ">
      <Image
        src={image}
        alt="NFT Image"
        fill
        sizes="100vw"
        placeholder="blur"
        priority
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0cPCpBwAC4QFN8b7mrwAAAABJRU5ErkJggg=="
        className="object-fill duration-200 hover:scale-125 "
      />
    </div>
  );
}
