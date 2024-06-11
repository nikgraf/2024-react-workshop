import { UpdateName2 } from "../../components/UpdateName2";
import { getName } from "../../db/getName";

export default async function Demo() {
  const name = await getName();

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <UpdateName2 name={name} />
    </div>
  );
}
