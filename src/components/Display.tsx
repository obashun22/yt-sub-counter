import Image from "next/image";

type Props = {
};

export const Display = (props: Props) => {
  const { } = props;
  return (
    <div>
      <Image
        src="https://placehold.jp/120x120.png"
        alt="logo"
        width={120}
        height={120}
        className="mx-auto rounded-full w-[120px] h-[120px]"
      />
      <h1 className="mt-2 text-2xl font-bold">Channel Name</h1>
      <p className="my-9 text-5xl font-bold">12345</p>
      <p className="text-3xl font-bold">Subscribers</p>
    </div>
  );
};
