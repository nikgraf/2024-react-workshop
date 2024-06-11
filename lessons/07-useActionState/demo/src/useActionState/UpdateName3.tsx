import { useActionState } from "react";
import { showToast } from "../showToast";
import { successAsync } from "../utils/successAsync";

type Data = { id: string; name: string | null };

type Response = {
  error: string | null;
  data: Data;
};

// the API returns the updated name, but Anna
// the form is reset and the defaultValue is filled

export const UpdateName3: React.FC<Data> = (initialData) => {
  const [state, submitAction, isPending] = useActionState<Response, FormData>(
    async (previousState, formData) => {
      const name = formData.get("name") as string;
      const result = await successAsync(name);
      if (!result.error) {
        showToast("Name updated");
      }
      return result;
    },
    { error: null, data: initialData }
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" defaultValue={state.data.name || ""} />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      <div> Name: {state.data.name}</div>
      {state.error && <p>{state.error}</p>}
    </form>
  );
};
