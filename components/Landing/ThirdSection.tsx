"use client";
import Card from "../Card";
import { useInView } from "react-intersection-observer";
export default function ThirdSection() {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen font-extrabold text-center bg-black "
    >
      <div>
        <h1 className="text-[#ECB8F3] text-2xl uppercase">comming soon</h1>
        <article className="font-sans text-5xl text-white">
          Qwero marketplace is a platform where individuals can buy,sell, and
          trade non-fungible token(NFT)s.
        </article>
      </div>
      <div className="absolute flex justify-center -top-48">
        <div className={`absolute ${inView ? "animate-diagonalRight" : null}`}>
          <Card />
        </div>
        <div className="absolute z-10">
          <Card />
        </div>
        <div className={`absolute ${inView ? "animate-diagonalLeft" : null}`}>
          <Card />
        </div>
      </div>
    </section>
  );
}
