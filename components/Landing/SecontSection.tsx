import MarqueeBox from "./MarqueeBox";

export default function SecontSection() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen relative bg-white overflow-hidden">
      <main className="flex flex-col gap-5 text-center font-extrabold">
        <h1 className="text-9xl text-[#0D82F9]">QWERO</h1>
        <h2 className="text-5xl">
          <span>NFT,</span>
          <span>Comunity </span>
          <span>is yours</span>
        </h2>
      </main>
      <MarqueeBox />
    </section>
  );
}
