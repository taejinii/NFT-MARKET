export default function CollectionDetailPage({
  params,
}: {
  params: { collectionContaract: string };
}) {
  return <section className="mt-16">{params.collectionContaract}</section>;
}
