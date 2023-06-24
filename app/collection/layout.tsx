export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full mt-16 responsive-container">
      {children}
    </section>
  );
}
