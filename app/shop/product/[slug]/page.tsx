"use client";

import {
  CategoryBagde,
  DisplayPrice,
  ProductMediaCarousel,
  SingleProductImage,
  ThreeLineStrikesDesignElement,
} from "@/components/Shop/ProductPageComps";

import { useParams } from "next/navigation";
import appUrl from "@/utils/apiCallHandler";
import { Product } from "@/types/product";
import { Breadcrumb } from "@/components/Breadcrumb";
import { QuantitySelectorGroup } from "@/components/Shop/QuantitySelectors";
import { AddToCartBtn } from "@/components/Cart/CartComps";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!params.slug) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          appUrl(`/api/products/one?productId=${params.slug}`),
        );

        if (!res.ok) {
          console.error("Failed to fetch product:", res.status, res.statusText);
          setError(true);
          return;
        }

        const data = await res.json();
        if (!data.data) {
          setError(true);
          return;
        }

        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (error || !product) {
    return <ProductNotFound />;
  }

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Breadcrumb
        crumbs={[
          { name: "Shop", href: "/shop" },
          { name: product.name, href: `/shop/product/${product.id}` },
        ]}
      />
      <div className="relative p-0 md:p-5">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative">
              {product.media.images.length > 1 ||
              product.media.videos.length > 1 ? (
                <ProductMediaCarousel productMediaList={product.media} />
              ) : (
                <SingleProductImage image={product.media.images[0]} />
              )}

              <ThreeLineStrikesDesignElement />
            </div>
          </div>
          <div className="mt-10 space-y-16 p-5 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mt-0">
            <div className="space-y-5">
              <CategoryBagde categories={product.categories} />
              <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-neutral-200">
                {product.name}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-neutral-400">
                {product.description}
              </p>
            </div>
            <div className="">
              <QuantitySelectorGroup />
              <div className="mt-5 flex items-center justify-between">
                <DisplayPrice product={product} />
                <AddToCartBtn product={product} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 hidden size-full grid-cols-12 md:grid">
          <div className="col-span-full h-full w-full rounded-xl bg-gray-100 lg:col-span-7 lg:col-start-6 dark:bg-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

const ProductSkeleton = () => {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="h-6 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      <div className="relative mt-8 p-0 md:p-5">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative h-[500px] animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="mt-10 space-y-16 p-5 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mt-0">
            <div className="space-y-5">
              <div className="h-8 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-24 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex justify-between">
                <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-8 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductNotFound = () => {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
          Product Not Found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          The product you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <a
          href="/shop"
          className="text-primary hover:text-primaryDark dark:text-secondaryDark dark:hover:text-secondary"
        >
          Return to Shop
        </a>
      </div>
    </div>
  );
};
