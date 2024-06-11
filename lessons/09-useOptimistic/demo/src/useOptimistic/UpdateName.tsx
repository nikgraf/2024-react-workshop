import { useActionState, useOptimistic } from "react";
import { showToast } from "../showToast";
import { successAsync } from "../utils/successAsync";

type Data = { id: string; name: string | null };

type Response = {
  error: string | null;
  data: Data;
};

export const UpdateName: React.FC<Data> = (initialData) => {
  const [state, submitAction, isPending] = useActionState<Response, FormData>(
    async (previousState, formData) => {
      const name = formData.get("name") as string;
      updateOptimisticName(name);
      const result = await successAsync(name);
      // What happens if the server returns a different name?
      // result.data.name = "Anna";
      if (!result.error) {
        showToast("Name updated");
      }
      return result;
    },
    { error: null, data: initialData }
  );

  const [optimisticName, updateOptimisticName] = useOptimistic<
    string | null,
    string
  >(state.data.name, (prevState, newName) => {
    return newName;
  });

  return (
    <form action={submitAction}>
      <input type="text" name="name" defaultValue={state.data.name || ""} />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      <div> Name: {optimisticName}</div>
      {state.error && <p>{state.error}</p>}
    </form>
  );
};
