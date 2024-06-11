import { useActionState } from "react";
import { showToast } from "../showToast";
import { Product } from "../types";
import { Button } from "./Button";

type Result = { data: Product | null; error: string | null };

type Props = {
  product: Product;
  addToCart: (order: { id: string; amount: number }) => Promise<Result>;
};

export const ProductDetail: React.FC<Props> = ({ product, addToCart }) => {
  const [state, submitAction, isPending] = useActionState<Result, FormData>(
    async (_previousState, formData) => {
      const id = formData.get("id") as string;
      const amount = Number(formData.get("amount"));
      const result = await addToCart({ id, amount });
      if (result.error) {
        showToast("Failed to add item to the cart");
      } else {
        showToast("Added item to the cart");
      }
      return result;
    },
    { error: null, data: product }
  );

  if (!state.data) {
    return <p>Product not found</p>;
  }

  return (
    <form action={submitAction}>
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
      <Button>Add to Cart</Button>
    </form>
  );
};
