"use client";

import { useState } from "react";
import { useServerAction } from "zsa-react";
import { incrementNumberAction } from "../actions/incrementNumberAction";

export const IncrementNumberWithHook: React.FC = () => {
  const [counter, setCounter] = useState(24);
  const { isPending, execute, data } = useServerAction(incrementNumberAction);

  return (
    <div>
      <button
        disabled={isPending}
        onClick={async () => {
          const [data, err] = await execute({
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
