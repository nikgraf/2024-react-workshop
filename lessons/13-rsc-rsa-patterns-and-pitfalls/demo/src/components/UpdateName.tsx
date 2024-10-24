"use client";

import { updateUsernameAction } from "@/actions/updateUsernameAction";
import { useServerAction } from "zsa-react";

type Props = { username: string };

export const UpdateName: React.FC<Props> = ({ username }) => {
  const { isPending, execute, data } = useServerAction(updateUsernameAction, {
    initialData: username,
  });

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData(form);
        const [data, err] = await execute(formData);

        if (err) {
          // handle error
          console.log(err);
          return;
        }

        form.reset();
      }}
    >
      <input
        type="text"
        name="username"
        disabled={isPending}
        defaultValue={data}
      />
      <button type="submit" disabled={isPending}>
        Update
      </button>
    </form>
  );
};
