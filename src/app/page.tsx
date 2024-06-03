"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center">
      <Image
        src="/vercel.svg"
        alt="logo"
        width={120}
        height={120}
        className="mx-auto rounded-full w-[120px] h-[120px]"
      />
      <h1 className="text-xl font-bold">HikakinTV</h1>
      <p className="my-6 text-5xl font-bold">1</p>
      <p className="text-2xl font-bold">Subscribers</p>
    </main>
  );
}
