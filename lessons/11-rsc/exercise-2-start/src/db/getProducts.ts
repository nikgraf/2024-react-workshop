import { Product } from "../types";

export const getProducts = async () => {
  // sleep for 1 second to simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

  return products;
};
