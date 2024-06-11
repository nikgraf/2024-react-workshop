"use client";

import { useState } from "react";

type Params = {
  maxTemp: number;
  minTemp: number;
  name: string;
  children: React.ReactNode;
};
export const ExpandableWeather: React.FC<Params> = ({
  maxTemp,
  minTemp,
  name,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="">
      <button onClick={() => setExpanded(!expanded)}>Toggle</button>
      {expanded && (
        <div>
          Name: {name}
          <br />
          Max Temp: {maxTemp}
          <br />
          Min Temp: {minTemp}
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};
