export default async function Layout({
  children,
  project,
}: Readonly<{
  children: React.ReactNode;
  project: React.ReactNode;
}>) {
  return (
    <>
      {project}
      {children}
    </>
  );
}
