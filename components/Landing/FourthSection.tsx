import Image from "next/image";
import Link from "next/link";
import Azuki from "../../public/images/azuki1.png";
import BestCollectionSlider from "./BestCollectionSlider";
export default function FourthSection() {
  return (
    <section className="flex flex-col h-screen p-20 bg-white">
      <h1 className="flex flex-col justify-start  w-full mb-10 text-[#0D82F9] font-sans font-extrabold lg:text-6xl text-3xl uppercase">
        <span>top artist</span>
        <span>collections</span>
      </h1>
      <article className="flex flex-col w-full h-full gap-10 pb-20 lg:flex-row">
        <Link href={"/"} className="basis-1/2">
          <Image
            src={Azuki}
            alt="TOP ARTIST COLLECTION"
            width={800}
            height={800}
            className="w-full h-full rounded-xl"
          />
        </Link>
        <div className="flex  bg-[#E7F0FF] rounded-xl basis-1/2">
          <div className="flex flex-col justify-between p-10 font-sans font-extrabold basis-7/12">
            <div className="flex flex-col text-xl lg:text-5xl">
              <span>Azuki</span>
              <span>Azuki #1925</span>
            </div>
            <div className="text-xs lg:text-lg xl:text-xl">
              <p className="">
                Azuki starts with a collection of 10,000 avatars that give you
                membership access to The Garden: a corner of the internet where
                artists, builders, and web3 enthusiasts meet to create a
                decentralized future. Azuki holders receive access to exclusive
                drops, experiences, and more. Visit azuki.com for more
                details.We rise together. We build together. We grow together.
              </p>
            </div>
          </div>
          <div className="flex justify-center px-6 overflow-hidden basis-5/12">
            <BestCollectionSlider />
          </div>
        </div>
      </article>
    </section>
  );
}
