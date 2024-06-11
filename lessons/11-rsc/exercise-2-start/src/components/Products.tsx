"use client";

import { Product } from "@/types";

type Props = {
  productsPromise: Promise<Product[]>;
};

export const Products: React.FC<Props> = ({ productsPromise }) => {
  return <></>;
};
