"use client";
import MarqueeBox from "./MarqueeBox";
import { useInView } from "react-intersection-observer";
export default function SecontSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white"
    >
      <main className="flex flex-col font-extrabold text-center">
        <h1
          className={`text-[200px] text-[#0D82F9] uppercase ${
            inView ? "animate-slideUp visible" : "invisible"
          }`}
        >
          qwero
        </h1>
        <h2 className="text-3xl">
          <span>NFT marketplace for your commuity.</span>
        </h2>
      </main>
      <MarqueeBox />
    </section>
  );
}
