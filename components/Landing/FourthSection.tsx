import Image from "next/image";
import Link from "next/link";
import Azuki from "../../public/images/azuki1.png";
export default function FourthSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-60">
      <h1 className="flex flex-col justify-start  w-full mb-10 text-[#0D82F9] font-sans font-extrabold md:text-6xl text-3xl uppercase">
        <span>top artist</span>
        <span>collections</span>
      </h1>
      <article className="flex w-full h-full gap-10 ">
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
          <div className="flex flex-col justify-between p-10 font-sans font-extrabold basis-8/12">
            <div className="flex flex-col text-5xl ">
              <span>Azuki</span>
              <span>Azuki #1925</span>
            </div>
            <div>
              <p>
                Azuki starts with a collection of 10,000 avatars that give you
                membership access to The Garden: a corner of the internet where
                artists, builders, and web3 enthusiasts meet to create a
                decentralized future. Azuki holders receive access to exclusive
                drops, experiences, and more. Visit azuki.com for more
                details.We rise together. We build together. We grow together.
              </p>
              <button>컬렉션 보러가는버튼</button>
            </div>
          </div>
          <div className="basis-4/12"></div>
        </div>
      </article>
    </section>
  );
}
