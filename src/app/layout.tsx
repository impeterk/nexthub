export default async function Layout(props: LayoutProps<"/">) {
  return (
    <>
      {props.project}
      {props.children}
    </>
  );
}
