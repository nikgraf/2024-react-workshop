import { useFormStatus } from "react-dom";

export const FancyButton: React.FC = () => {
  const { pending, method, action, data } = useFormStatus();

  console.log({ pending, method, action, data });

  return (
    <button type="submit" disabled={pending}>
      Update {pending && "(loading…)"}
    </button>
  );
};
