"use client";

import { updateUsernameAction } from "@/actions/updateUsernameAction";
import { useServerAction } from "zsa-react";

type Props = { username: string };

export const UpdateName: React.FC<Props> = ({ username }) => {
  const { isPending, execute, data } = useServerAction(updateUsernameAction);

  return (
    <form action={execute}>
      <input
        type="text"
        name="username"
        disabled={isPending}
        defaultValue={username}
      />
      <button type="submit" disabled={isPending}>
        Update
      </button>
    </form>
  );
};
