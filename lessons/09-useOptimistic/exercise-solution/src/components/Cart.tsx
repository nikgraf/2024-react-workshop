import { OrderedProduct } from "../types";

type Props = {
  cart: OrderedProduct[];
};

export const Cart: React.FC<Props> = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.amount} {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
