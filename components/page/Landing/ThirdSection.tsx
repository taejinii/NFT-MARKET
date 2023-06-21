"use client";
import Card from "../../ui/Card";
import { useInView } from "react-intersection-observer";
export default function ThirdSection() {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center h-screen font-sans font-extrabold text-center bg-black "
    >
      <div>
        <h1 className="text-[#ECB8F3] text-2xl uppercase max-md:text-xs">
          comming soon
        </h1>
        <article className="flex flex-col gap-2 p-2 text-3xl text-white 2xl:text-5xl">
          <p>Qwero marketplace is a platform where</p>
          <p>individuals can buy,sell, and trade non-fungible</p>
          <p>token(NFT)s. NFTs are unique digital assets that</p>
          <p>are verified on a blockchain network, making</p>
          <p>them secure and tamper-proof.</p>
        </article>
      </div>
      <div className="absolute flex justify-center -top-28 2xl:-top-48">
        <div
          className={`absolute ${
            inView ? "animate-diagonalRight" : "hidden"
          } hover:z-20`}
        >
          <Card />
        </div>
        <div className="absolute z-10">
          <Card />
        </div>
        <div
          className={`absolute ${
            inView ? "animate-diagonalLeft" : "hidden"
          } hover:z-20`}
        >
          <Card />
        </div>
      </div>
    </section>
  );
}
