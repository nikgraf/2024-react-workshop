import { Products } from "@/components/Products";
import { getProducts } from "../db/getProducts";

export default async function Home() {
  const productsPromise = getProducts();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Products</h1>
        <Products productsPromise={productsPromise} />
      </main>
    </div>
  );
}
