import { z } from "zod";

export const Product = z.object({
  id: z.string(),
  title: z.string(),
  available: z.number(),
});

export type Product = z.infer<typeof Product>;

export const Products = z.array(Product);

export type Products = z.infer<typeof Products>;
