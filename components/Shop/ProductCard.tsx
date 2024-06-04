import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { DisplayPrice } from "./ProductPageComps";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/shop/product/${product.id}`}
      className="flex flex-col bg-white hover:shadow-md max-w-80 min-w-60 border shadow-sm rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <Image
        width={400}
        height={400}
        className="w-full h-auto rounded-t-md object-cover"
        src={product.images[0]}
        alt={`Image of ${product.name}`}
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {"No description available"}
        </p>
        <div className="flex items-center justify-between mt-4">
          <DisplayPrice product={product} size="small" />
          <button className="px-3 py-2 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-md dark:bg-primaryDark">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
