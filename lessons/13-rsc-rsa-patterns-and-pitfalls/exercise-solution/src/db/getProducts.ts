import { Product, Products } from "../types";

const products: Product[] = [
  {
    id: "1",
    title: "Learning useActionState w/ Nik",
    available: 8,
  },
  {
    id: "2",
    title: "Leaving Software Engineering behind - How to become a farmer",
    available: 2,
  },
];

export const getProducts = async () => {
  // sleep for 1 second to simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Products.parse(products);
};
