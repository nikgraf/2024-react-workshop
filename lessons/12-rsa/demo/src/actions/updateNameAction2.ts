"use server";

import { getName } from "../db/getName";
import { setName } from "../db/setName";

export async function updateNameAction2(_state: any, formData: FormData) {
  // console.log(formData);
  try {
    const newUsername = formData.get("username") as string;
    await setName(newUsername);
    return { data: newUsername, error: null };
  } catch (error) {
    console.error(error);
    const currentName = await getName();
    return { data: currentName, error: "Failed to update the name" };
  }
}
