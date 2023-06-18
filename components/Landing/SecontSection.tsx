"use client";
import MarqueeBox from "./MarqueeBox";
import { useInView } from "react-intersection-observer";
export default function SecontSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center min-h-screen relative bg-white overflow-hidden"
    >
      <main className="flex flex-col text-center font-extrabold">
        <h1
          className={`text-[200px] text-[#0D82F9] ${
            inView ? "animate-slideUp visible" : "invisible"
          }`}
        >
          QWERO
        </h1>
        <h2 className="text-3xl">
          <span>NFT marketplace for your commuity.</span>
        </h2>
      </main>
      <MarqueeBox />
    </section>
  );
}
