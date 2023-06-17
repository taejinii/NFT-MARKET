export default function FirstSection() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      <div className="gap-4 flex flex-col text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center z-10  font-bold">
        <h1 className="text-5xl">NFT-MARKET</h1>
        <h2 className="text-2xl">
          <span>Unlock infinite world of digital treasures</span>
        </h2>
      </div>
    </div>
  );
}
