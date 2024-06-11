"use client";

import { useActionState } from "react";
import { loginAction } from "../actions/loginAction";

type Props = {};

type State = { success: boolean | null };

export const Login: React.FC<Props> = () => {
  const [state, submitAction, isPending] = useActionState<State, FormData>(
    loginAction,
    { success: null }
  );

  return (
    <form action={submitAction}>
      <input
        type="text"
        name="username"
        disabled={isPending}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        disabled={isPending}
        placeholder="password"
      />
      <button type="submit" disabled={isPending}>
        Login
      </button>
      {state.success === false && <p>Login failed</p>}
      {state.success === true && <p>Login successful</p>}
    </form>
  );
};
