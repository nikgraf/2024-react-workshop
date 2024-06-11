import Button from "../../components/Button";
import { getName } from "../../db/getName";
import { setName } from "../../db/setName";

export default async function Demo() {
  async function updateName() {
    "use server";

    await setName("Franz");
  }

  const name = await getName();

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <p>{name}</p>
      <Button onClick={updateName} />
    </div>
  );
}
