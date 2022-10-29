export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-8 text-white">asd</div>
    </div>
  );
}

type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};
