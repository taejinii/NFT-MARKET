import Image from "next/image";
import Link from "next/link";
import BestCollectionSlider from "./BestCollectionSlider";
export default function FourthSection() {
  return (
    <section className="flex flex-col h-screen bg-white p-14">
      <h1 className="flex flex-col justify-start  w-full h-full mb-10 text-[#0D82F9]  font-extrabold lg:text-6xl text-3xl uppercase">
        <span>top artist</span>
        <span>collections</span>
      </h1>
      <article className="flex flex-col w-full h-full gap-5 pb-20 lg:gap-10 md:flex-row">
        <Link href={"/"} className="relative w-full h-96 md:h-full">
          <Image
            src="/images/azuki1.avif"
            alt="TOP ARTIST COLLECTION"
            priority
            fill
            sizes="100vw"
            className="absolute object-cover w-full h-full rounded-xl"
          />
        </Link>
        <div className="flex flex-col  lg:flex-row w-full h-full bg-[#E7F0FF] rounded-xl ">
          <div className="flex flex-col justify-between gap-2 p-10  font-extrabold max-sm:p-4 basis-5/6">
            <div className="flex flex-col text-lg lg:text-3xl 2xl:text-5xl">
              <span>Azuki</span>
              <span>Azuki #1925</span>
            </div>
            <p className="text-xs max-sm:truncate lg:text-base 2xl:text-xl">
              Azuki starts with a collection of 10,000 avatars that give you
              membership access to The Garden: a corner of the internet where
              artists, builders, and web3 enthusiasts meet to create a
              decentralized future.
            </p>
            <button className="p-2 border-2 border-black rounded-xl ">
              button
            </button>
          </div>
          <div className="flex justify-center w-full h-full p-2 overflow-hidden ">
            <BestCollectionSlider />
          </div>
        </div>
      </article>
    </section>
  );
}
