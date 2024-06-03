import Image from "next/image";

type Props = {
  imageUrl: string;
  channelName: string;
  startSubsCount: number;
  endSubsCount: number;
};

export const Display = (props: Props) => {
  const { imageUrl, channelName, startSubsCount, endSubsCount } = props;
  return (
    <div>
      <Image
        src="https://placehold.jp/120x120.png"
        alt="logo"
        width={120}
        height={120}
        className="mx-auto rounded-full w-[120px] h-[120px]"
      />
      <h1 className="mt-2 text-2xl font-bold">{channelName}</h1>
      <p className="my-9 text-5xl font-bold">{startSubsCount}</p>
      <p className="text-3xl font-bold">Subscribers</p>
    </div>
  );
};
