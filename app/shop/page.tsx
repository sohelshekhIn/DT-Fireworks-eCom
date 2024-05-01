import ProductCard from "@/components/Shop/ProductCard";
import { product } from "@/data/DummyData";

const ShopPage = () => {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Shop
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Buy from extensive range of products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
    </section>
  );
};

export default ShopPage;
