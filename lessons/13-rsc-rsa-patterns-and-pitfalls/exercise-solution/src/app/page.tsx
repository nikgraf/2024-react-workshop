import { Products } from "@/components/Products";
import { getProducts } from "@/db/getProducts";

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <Products products={products} />
    </div>
  );
}
