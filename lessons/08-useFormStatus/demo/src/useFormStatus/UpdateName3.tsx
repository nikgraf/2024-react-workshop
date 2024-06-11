import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { showToast } from "../showToast";
import { successAsync } from "../utils/successAsync";

type Data = { id: string; name: string | null };

type Response = {
  error: string | null;
  data: Data;
};

export const FancyButton: React.FC = () => {
  const { pending, method, action, data } = useFormStatus();

  console.log({ pending, method, action, data });

  return (
    <button type="submit" disabled={pending}>
      Update
    </button>
  );
};

export const UpdateName3: React.FC = () => {
  const [state, submitAction, isPending] = useActionState<Response, FormData>(
    async (previousState, formData) => {
      const name = formData.get("name") as string;
      const result = await successAsync(name);
      if (!result.error) {
        showToast("Name updated");
      }
      return result;
    },
    { error: null, data: { id: "1", name: null } }
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <FancyButton />
      {state.error && <p>{state.error}</p>}
    </form>
  );
};
