import { Product } from "../types";

type Result = { data: Product | null; error: string | null };

type Props = {
  product: Product;
  addToCart: (order: { id: string; amount: number }) => Promise<Result>;
};

export const ProductDetail: React.FC<Props> = ({ product, addToCart }) => {
  const state = { data: product };

  if (!state.data) {
    return <p>Product not found</p>;
  }

  return (
    <form>
      <h2>
        {state.data.title} ({state.data.available} available)
      </h2>
      <input type="hidden" name="id" value={state.data.id} />
      <input
        type="number"
        name="amount"
        min="0"
        max={state.data.available}
        defaultValue={state.data.available > 0 ? "1" : "0"}
      />
      <button type="submit">Add to Cart</button>
    </form>
  );
};
