import BlogComponent from "components/BlogComponent";

export default function Page() {
  return (
    <div className="grid grid-flow-col gap-0 items-start h-screen w-screen place-items-start backdrop:brightness-[250%]">
      <BlogComponent title="podsfy.com"></BlogComponent>
    </div>
  );
}
