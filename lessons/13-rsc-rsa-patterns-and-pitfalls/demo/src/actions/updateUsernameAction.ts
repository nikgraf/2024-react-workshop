"use server";

import z from "zod";
import { createServerActionProcedure } from "zsa";

const getCurrentUser = () => {
  return { email: "jane@example.com", id: "1234", name: "Jane" };
};

const authedProcedure = createServerActionProcedure().handler(async () => {
  try {
    const { email, id, name } = await getCurrentUser();
    return { user: { email, id, name } };
  } catch {
    throw new Error("User not authenticated");
  }
});

export const updateUsernameAction = authedProcedure
  .createServerAction()
  .input(
    z.object({
      username: z.string(),
    }),
    {
      type: "formData",
    }
  )
  .handler(async ({ input, ctx }) => {
    const { user } = ctx;

    // Update user's email in the database
    console.log("user", user);

    return input.username;
  });
