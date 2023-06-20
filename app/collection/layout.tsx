export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full mt-16 responsive-container">{children}</section>
  );
}
