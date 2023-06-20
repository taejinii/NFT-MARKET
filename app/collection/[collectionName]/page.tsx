export default function CollectionDetailPage({
  params,
}: {
  params: { collectionName: string };
}) {
  return <section className="mt-16">{params.collectionName}</section>;
}
