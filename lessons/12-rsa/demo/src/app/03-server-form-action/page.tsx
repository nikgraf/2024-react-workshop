import { getName } from "../../db/getName";
import { setName } from "../../db/setName";

export default async function Demo() {
  const name = await getName();

  const updateName = async (formData: FormData) => {
    "use server";

    const newUsername = formData.get("username") as string;
    await setName(newUsername);
  };

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <form action={updateName}>
        <input type="text" name="username" defaultValue={name} />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
}
