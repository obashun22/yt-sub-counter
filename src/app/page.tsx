"use client";

import { useState } from "react";
import {
  Button,
  ButtonBase,
  Container,
  FormGroup,
  FormLabel,
  Input,
  TextField,
} from "@mui/material";

import { Page } from "@/types/page";
import { Display } from "@/components/Display";
import { Settings } from "@/components/Settings";

type Setting = {
  channelName: string;
  startSubsCount: number;
  endSubsCount: number;
  imageUrl: string;
};

const initSetting: Setting = {
  channelName: "HikakinTV",
  startSubsCount: 999999,
  endSubsCount: 1000000,
  imageUrl: "/vercel.svg",
}

export default function Home() {
  const [activePage, setActivePage] = useState(Page.Setting);
  const [setting, setSetting] = useState<Setting>(initSetting);
  return (
    <main className="text-center">
      <Button
        color="primary"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() =>
          setActivePage(
            activePage === Page.Display ? Page.Setting : Page.Display
          )
        }
      >
        Switch
      </Button>
      {activePage === Page.Display && (
        <Display />
      )}
      {activePage === Page.Setting && (
        <Settings />
      )}
    </main>
  );
}
