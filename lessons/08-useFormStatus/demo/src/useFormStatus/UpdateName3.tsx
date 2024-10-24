import { useActionState } from "react";
import { showToast } from "../showToast";
import { successAsync } from "../utils/successAsync";
import { FancyButton } from "./FancyButton";

type Data = { id: string; name: string | null };

type Response = {
  error: string | null;
  data: Data;
};

export const UpdateName3: React.FC = () => {
  const [state, submitAction] = useActionState<Response, FormData>(
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
