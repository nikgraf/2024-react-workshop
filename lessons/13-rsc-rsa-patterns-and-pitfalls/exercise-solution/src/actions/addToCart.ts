"use server";

import { getProducts } from "@/db/getProducts";
import { Product } from "@/types";
import z from "zod";
import { createServerAction } from "zsa";

export const addToCart = createServerAction()
  .input(
    z.object({
      id: z.string(),
      amount: z.number(),
    })
  )
  .output(
    z.object({
      error: z.nullable(z.string()),
      data: z.nullable(Product),
    })
  )
  .handler(async ({ input }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const products = await getProducts();
    const product = products.find((p) => p.id === input.id);
    if (!product) {
      return {
        error: "Product not found",
        data: null,
      };
    }

    return {
      error: null,
      data: { ...product, available: product.available - input.amount },
    };
  });
