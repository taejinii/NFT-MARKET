export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full mt-16 lg:px-4 xl:px-6 2xl:px-8">
      {children}
    </section>
  );
}
