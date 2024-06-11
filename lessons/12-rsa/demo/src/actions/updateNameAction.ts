"use server";

import { setName } from "../db/setName";

export async function updateNameAction() {
  // do not use "use server" here!!!
  await setName("Jane");
}
