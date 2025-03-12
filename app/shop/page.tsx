"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import { NotFoundSapien } from "@/public/images";
import { Category } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShopPage = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(appUrl("/api/categories/all"));

        if (!res.ok) {
          console.error(
            "Failed to fetch categories:",
            res.status,
            res.statusText,
          );
          setError(true);
          return;
        }

        const data = await res.json();
        if (!data.data || data.data.length === 0) {
          setError(true);
          return;
        }

        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <ShopSkeleton />;
  }

  if (error || !categories || categories.length === 0) {
    return <NoCategoriesFound />;
  }

  return (
    <section className="mx-auto w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Shop
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Buy from our extensive range of products & categories
        </p>
      </div>
      <Breadcrumb crumbs={[{ name: "Shop", href: "/shop" }]} />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category: Category) => (
          <Link
            key={`shop-category-list-${category.id}`}
            className="group relative block rounded-xl"
            href={`/shop/${category.isOccassion ? "occassion" : "category"}/${
              category.id
            }`}
          >
            <div className="relative h-[250px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
              <Image
                width="300"
                height="200"
                className="absolute start-0 top-0 size-full object-cover"
                src={category.thumb_image}
                alt={`Image describing ${category.name} category for fireworks`}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-secondaryDark sm:text-2xl">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopPage;

const ShopSkeleton = () => {
  return (
    <section className="mx-auto w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <div className="h-8 w-32 animate-pulse rounded-lg bg-gray-200 md:h-10 md:w-40 dark:bg-gray-700"></div>
        <div className="mt-4 h-4 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative block rounded-xl">
            <div className="h-[250px] animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NoCategoriesFound = () => {
  return (
    <section className="mx-auto w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 min-h-dvh max-w-2xl text-center lg:mb-14">
        <Image
          width={500}
          height={500}
          className="mx-auto"
          src={NotFoundSapien}
          alt="No Categories Found"
        />
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          No Categories Found
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          No categories found in the shop.
        </p>
        <Link
          href="/shop"
          className="mt-10 font-semibold text-primary underline dark:text-primaryDark"
        >
          Go Back to Shop
        </Link>
      </div>
    </section>
  );
};
