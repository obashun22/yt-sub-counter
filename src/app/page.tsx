"use client";

import { useState } from "react";

import { Display } from "@/components/Display";

enum Page {
  Setting,
  Display,
}

export default function Home() {
  const [activePage, setActivePage] = useState(Page.Display);
  return (
    <main className="text-center">
      <h1 className="text-2xl font-bold">YouTube Subscriber Counter</h1>
      <button
        onClick={() => setActivePage(Page.Setting)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Settings
      </button>
      {activePage === Page.Display && (
        <Display
          imageUrl="/vercel.svg"
          channelName="Vercel"
          startSubsCount={1000}
          endSubsCount={2000}
        />
      )}
      {activePage === Page.Setting && (
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <button
            onClick={() => setActivePage(Page.Display)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Back
          </button>
        </div>
      )}
    </main>
  );
}
