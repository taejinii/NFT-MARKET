export const metadata = {
  title: "Collection - QWERO",
  description: "NFT 컬렉션 랭킹 순위",
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col pt-16 responsive-container">
      {children}
    </section>
  );
}
