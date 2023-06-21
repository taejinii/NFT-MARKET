export default function CollectionDetailPage({
  params,
}: {
  params: { collectionContaract: string };
}) {
  const { collectionContaract } = params;
  return <>{collectionContaract}</>;
}
