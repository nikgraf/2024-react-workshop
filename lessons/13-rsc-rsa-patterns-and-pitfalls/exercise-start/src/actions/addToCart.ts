"use server";

import { getProducts } from "@/db/getProducts";
import { createServerAction } from "zsa";

export const addToCart = createServerAction().handler(async ({ input }) => {
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
