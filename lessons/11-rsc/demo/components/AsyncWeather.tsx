"use client";

import { use } from "react";

type Props = {
  weather: Promise<{
    maxTemp: number;
    minTemp: number;
    name: string;
  }>;
};

export const AsyncWeather: React.FC<Props> = ({ weather }) => {
  const data = use(weather);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Name: {data.name}
      <br />
      Max Temp: {data.maxTemp}
      <br />
      Min Temp: {data.minTemp}
    </div>
  );
};
