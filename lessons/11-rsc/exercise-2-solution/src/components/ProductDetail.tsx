import { Product } from "../types";

type Props = {
  product: Product;
};

export const ProductDetail: React.FC<Props> = ({ product }) => {
  return (
    <form>
      <h2>
        {product.title} ({product.available} available)
      </h2>
      <input type="hidden" name="id" value={product.id} />
      <input
        type="number"
        name="amount"
        min="0"
        max={product.available}
        defaultValue={product.available > 0 ? "1" : "0"}
      />
      <button type="submit">Add to Cart</button>
    </form>
  );
};
