"use server";

import z from "zod";
import { createServerAction } from "zsa";

export const incrementNumberAction = createServerAction()
  .input(
    z.object({
      number: z.number(),
    })
  )
  .handler(async ({ input }) => {
    // Sleep for .5 seconds
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Increment the input number by 1
    return input.number + 1;
  });
