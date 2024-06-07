import { Page, Settings } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";

import { setPage } from "@/action_creaters/pageActions";
import { PLACEHOLD_IMAGE } from "@/constants/url";

export const Display = () => {
  const settings: Settings = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  const moveToSettings = () => {
    dispatch(setPage(Page.Setting));
  };
  const slideUp = () => {
    gsap.to(".count", { y: "-102%", duration: 2 });
  };

  const delayMilliSec = settings.delaySec * 1000;
  setTimeout(() => {
    slideUp();
  }, delayMilliSec);

  return (
    <div onClick={moveToSettings}>
      <Image
        src={
          settings.imageFile
            ? URL.createObjectURL(settings.imageFile)
            : PLACEHOLD_IMAGE
        }
        alt="User Icon"
        width={120}
        height={120}
        className="mx-auto rounded-full w-[120px] h-[120px] object-cover"
      />
      <h1 className="mt-2 text-2xl font-bold">{settings.channelName}</h1>
      <div className="my-9 flex flex-col overflow-hidden h-[48px]">
        <span className="text-5xl font-bold count">
          {settings.startSubsCount.toLocaleString()}
        </span>
        <span className="text-5xl font-bold count">
          {settings.endSubsCount.toLocaleString()}
        </span>
      </div>
      <p className="text-3xl font-bold">Subscribers</p>
    </div>
  );
};
