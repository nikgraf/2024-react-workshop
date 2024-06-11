"use client";

import { useState } from "react";
import { incrementNumberAction } from "../actions/incrementNumberAction";

export const IncrementNumber: React.FC = () => {
  const [counter, setCounter] = useState(24);
  return (
    <div>
      <button
        onClick={async () => {
          const [data, err] = await incrementNumberAction({
            number: counter,
          });

          if (err) {
            alert("Error 🤷");
            return;
          }

          setCounter(data);
        }}
      >
        Invoke action
      </button>
      <p>Count: {counter}</p>
    </div>
  );
};
