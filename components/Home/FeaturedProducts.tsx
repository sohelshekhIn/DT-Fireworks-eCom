"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import appUrl from "@/utils/apiCallHandler";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch(appUrl("/api/products/all?category=featured"));
        if (res.ok) {
          const data = await res.json();
          setProducts(data.data?.slice(0, 4) || []);
        }
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <FeaturedProductsSkeleton />;
  }

  if (products.length === 0) {
    return null; // Don't show the section if no featured products
  }

  // Determine grid columns and container classes based on number of products
  const containerClasses =
    products.length === 1
      ? "max-w-md mx-auto" // Single product - centered with max width
      : "w-full"; // Multiple products - full width

  const gridCols =
    products.length === 1
      ? "" // Single product - no grid
      : products.length === 2
        ? "grid sm:grid-cols-2"
        : "grid sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Featured Products
        </h2>
      </div>

      <div className={`${containerClasses} mb-10 lg:mb-14`}>
        <div className={`gap-6 ${gridCols}`}>
          {products.map((product) => (
            <Link
              key={product.id}
              className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md"
              href={`/shop/product/${product.id}`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  width={400}
                  height={300}
                  className="w-full rounded-t-xl object-cover p-10"
                  src={product.media.images[0]}
                  alt={`Image of ${product.name}`}
                />
              </div>
              <div className="p-4 md:p-5">
                <p className="mt-2 text-xs uppercase text-gray-600">
                  {product.categories && product.categories.length > 0
                    ? product.categories[0]
                    : "Featured"}
                </p>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-primaryDark">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block rounded-full border bg-white shadow-sm">
          <div className="flex items-center gap-x-2 px-4 py-3">
            <p className="text-gray-600">Want to see more?</p>
            <Link
              className="inline-flex items-center gap-x-1.5 font-medium text-primaryDark decoration-2 hover:underline"
              href="/shop"
            >
              Visit our store
              <svg
                className="size-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

const FeaturedProductsSkeleton = () => {
  return (
    <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <div className="mx-auto h-8 w-48 animate-pulse rounded-lg bg-gray-200"></div>
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:mb-14 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col rounded-xl border bg-white">
            <div className="aspect-w-16 aspect-h-9">
              <div className="h-full w-full animate-pulse rounded-t-xl bg-gray-200"></div>
            </div>
            <div className="space-y-3 p-4 md:p-5">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200"></div>
              <div className="h-6 w-full animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
