import { getCollectionInfoOpenSea } from "@/api/CollectionAPI";
import CollectionDetail from "@/components/page/Collection/CollectionDetail/CollectionDetail";
import CollectionInfo from "@/components/page/Collection/CollectionDetail/CollectionInfo";
import CollectionList from "@/components/page/Collection/CollectionDetail/CollectionList";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { collectionName: string };
}): Promise<Metadata> {
  const { collectionName } = params;
  const { collection } = await getCollectionInfoOpenSea(collectionName);
  console.log(collection);
  return {
    title: `${collection.name} | QWERO`,
    description: collection.description,
    openGraph: {
      images: { url: collection.image_url, alt: collection.name },
      title: collection.name,
      description: collection.description,
      url: `/collection/${collectionName}`,
    },
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: { collectionName: string };
}) {
  const { collectionName } = params;

  const { collection } = await getCollectionInfoOpenSea(collectionName);
  return (
    <section className="flex flex-col gap-5 pt-16">
      <header className="flex flex-col items-start gap-10 font-bold">
        <CollectionInfo info={collection} />
        <CollectionDetail stats={collection.stats} />
      </header>
      <CollectionList collectionName={collectionName} />
    </section>
  );
}
