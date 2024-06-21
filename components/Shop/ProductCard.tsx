import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { DisplayPrice } from "./ProductPageComps";
import { AddToCartBtn } from "../Cart/CartComps";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex min-w-60 max-w-80 flex-col rounded-md border bg-white shadow-sm hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-700/70">
      <Link href={`/shop/product/${product.id}`}>
        <Image
          width={400}
          height={400}
          className="h-72 w-full rounded-t-md object-cover"
          src={product.media.images[0]}
          alt={`Image of ${product.name}`}
        />
      </Link>
      <div className="mt-5 p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-none text-gray-500 md:line-clamp-2 dark:text-neutral-400">
          No description available Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptates odio nisi repellat corporis, eveniet
          velit voluptatum sint error optio mollitia?
        </p>
        <div className="mt-4 flex items-center justify-between">
          <DisplayPrice product={product} size="small" />
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
