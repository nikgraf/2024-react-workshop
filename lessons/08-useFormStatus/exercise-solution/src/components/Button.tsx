import { useFormStatus } from "react-dom";
import { Spinner } from "./Spinner";

export const Button: React.FC<{ children: React.ReactNode }> = (props) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && <Spinner />}
      <button {...props} disabled={pending} />
    </>
  );
};
