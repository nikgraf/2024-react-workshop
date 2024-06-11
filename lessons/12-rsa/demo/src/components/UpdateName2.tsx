"use client";

import { useActionState } from "react";
import { updateNameAction2 } from "../actions/updateNameAction2";

type Props = { name: string };

type State =
  | {
      data: string;
      error: null;
    }
  | {
      data: string;
      error: string;
    };

export const UpdateName2: React.FC<Props> = ({ name }) => {
  const [state, submitAction, isPending] = useActionState<State, FormData>(
    updateNameAction2,
    { data: name, error: null }
  );

  return (
    <form action={submitAction}>
      <input
        type="text"
        name="username"
        disabled={isPending}
        defaultValue={state.data}
      />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {state.error && <p>{state.error}</p>}
    </form>
  );
};
