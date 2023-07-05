import Ranking from "@/components/page/Collection/Ranking";
export default function CollectionPage() {
  return (
    <section className="flex flex-col pt-10 responsive-container">
      <header className="flex flex-col py-10 font-extrabold">
        <h1>Collection</h1>
        <p className="mt-4 text-xl font-normal text-gray-500">
          Discover the art that transcends boundaries and captures the essence
          of imagination.
        </p>
        <div className="flex w-full"></div>
      </header>
      <Ranking />
    </section>
  );
}
