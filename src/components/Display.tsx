import { Page, Settings } from "@/types";
import { PageActionType } from "@/types/actions";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export const Display = () => {
  const settings: Settings = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();
  const moveToSettings = () => {
    dispatch({ type: PageActionType.SET_PAGE, page: Page.Setting });
  };

  return (
    <div onClick={moveToSettings}>
      <Image
        src="https://placehold.jp/120x120.png"
        alt="logo"
        width={120}
        height={120}
        className="mx-auto rounded-full w-[120px] h-[120px]"
      />
      <h1 className="mt-2 text-2xl font-bold">{settings.channelName}</h1>
      <p className="my-9 text-5xl font-bold">{settings.startSubsCount}</p>
      <p className="text-3xl font-bold">Subscribers</p>
    </div>
  );
};
