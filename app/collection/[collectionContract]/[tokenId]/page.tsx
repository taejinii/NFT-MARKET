export default function NFTDetail({ params }: any) {
  const { collectionContract, tokenId } = params;

  return (
    <div>
      {collectionContract},{tokenId}
    </div>
  );
}
