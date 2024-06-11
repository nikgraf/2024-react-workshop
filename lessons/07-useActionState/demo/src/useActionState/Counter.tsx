import { useActionState } from "react";

const increment = (previousState: number) => {
  return previousState + 1;
};

// const incrementAsync = async (previousState: number) => {
//   return previousState + 1;
// };

export const Counter: React.FC = () => {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
};
