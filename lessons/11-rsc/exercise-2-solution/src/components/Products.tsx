"use client";

import { Product } from "@/types";
import { use } from "react";
import { ProductDetail } from "./ProductDetail";

type Props = {
  productsPromise: Promise<Product[]>;
};

export const Products: React.FC<Props> = ({ productsPromise }) => {
  const products = use(productsPromise);

  return (
    <>
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </>
  );
};
