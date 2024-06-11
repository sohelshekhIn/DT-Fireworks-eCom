import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { DisplayPrice } from "./ProductPageComps";
import { AddToCartBtn } from "./CartComps";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col bg-white hover:shadow-md max-w-80 min-w-60 border shadow-sm rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <Link href={`/shop/product/${product.id}`}>
        <Image
          width={400}
          height={400}
          className="w-full h-72 rounded-t-md object-cover"
          src={product.media.images[0]}
          alt={`Image of ${product.name}`}
        />
      </Link>
      <div className="p-4 md:p-5 mt-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-none md:line-clamp-2 text-gray-500 dark:text-neutral-400">
          No description available Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptates odio nisi repellat corporis, eveniet
          velit voluptatum sint error optio mollitia?
        </p>
        <div className="flex items-center justify-between mt-4">
          <DisplayPrice product={product} size="small" />
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
