"use client";

import { Product } from "@/types";
import { ProductDetail } from "./ProductDetail";

type Props = {
  products: Product[];
};

export const Products: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </>
  );
};
