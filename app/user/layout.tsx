export default function UserLayout({
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
