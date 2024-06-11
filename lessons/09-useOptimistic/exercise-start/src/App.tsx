import { useState } from "react";
import { Cart } from "./components/Cart";
import { ProductDetail } from "./components/ProductDetail";
import { OrderedProduct, Product } from "./types";

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

function App() {
  const [cart, setCart] = useState<OrderedProduct[]>([]);

  const addToCart = async ({ id, amount }: { id: string; amount: number }) => {
    // simulate an API call
    updateOptimisticCart({ id, amount });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const product = products.find((product) => product.id === id);
    if (!product) {
      return { error: "Product not found", data: null };
    }
    product.available -= amount;

    if (cart.some((product) => product.id === id)) {
      setCart((cart) =>
        cart.map((product) =>
          product.id === id
            ? { ...product, amount: product.amount + amount }
            : product
        )
      );
    } else {
      setCart((cart) => [...cart, { id, title: product.title, amount }]);
    }

    return {
      error: null,
      data: { ...product, available: product.available },
    };
  };

  // replace with an useOptimistic hook
  const [optimisticCart, updateOptimisticCart] = [
    cart,
    (_order: { id: string; amount: number }) => undefined,
  ];

  return (
    <>
      <Cart cart={optimisticCart} />
      {products.map((product) => (
        <ProductDetail
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </>
  );
}

export default App;
