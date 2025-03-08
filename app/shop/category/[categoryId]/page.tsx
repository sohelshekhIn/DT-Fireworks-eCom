"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import {
  CategoryNotFound,
  NoProductsFound,
} from "@/components/Shop/ErrorComps";
import ProductCard from "@/components/Shop/ProductCard";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!params.categoryId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const [categoryRes, productsRes] = await Promise.all([
          fetch(appUrl(`/api/categories/one?category=${params.categoryId}`)),
          fetch(appUrl(`/api/products/all?category=${params.categoryId}`)),
        ]);

        if (!categoryRes.ok) {
          setError(true);
          return;
        }

        const categoryData = await categoryRes.json();
        if (!categoryData.data) {
          setError(true);
          return;
        }

        setCategory(categoryData.data);

        if (productsRes.ok) {
          const productsData = await productsRes.json();
          if (productsData.data) {
            setProducts(productsData.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.categoryId]);

  if (loading) {
    return <CategorySkeleton />;
  }

  if (error || !category) {
    return <CategoryNotFound />;
  }

  if (!products || products.length === 0) {
    return (
      <>
        <CategoryHeader category={category} />
        <Breadcrumb
          crumbs={[
            {
              name: "Shop",
              href: "/shop/",
            },
            {
              name: category.name,
              href: `/shop/category/${category.id}`,
            },
          ]}
        />
        <NoProductsFound />
      </>
    );
  }

  return (
    <section className="mx-auto w-[85vw] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
      <CategoryHeader category={category} />
      <Breadcrumb
        crumbs={[
          {
            name: "Shop",
            href: "/shop/",
          },
          {
            name: category.name,
            href: `/shop/category/${category.id}`,
          },
        ]}
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-14">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;

const CategorySkeleton = () => {
  return (
    <section className="mx-auto w-[85vw] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
      <div className="w-full overflow-hidden rounded-t-xl">
        <div className="relative h-96 animate-pulse bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-14">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-[400px] animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
          ></div>
        ))}
      </div>
    </section>
  );
};

const CategoryHeader = ({ category }: { category: Category }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-xl">
      <div className="relative">
        <Image
          width={1200}
          height={300}
          className="max-h-96 w-full object-cover object-center"
          src={category.thumb_image}
          alt="Header Image for category"
        />
        <div className="absolute inset-0 z-[2] h-full w-full bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute top-20 z-[3] flex h-full w-full flex-col items-center justify-center p-5 text-secondaryDark">
          <h2 className="w-full text-center text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {category.name}
          </h2>
          <p className="mt-1 w-full text-center text-white/70">
            Decorate your wedding stage with our Wedding Fireworks & SFX
            package.
          </p>
        </div>
      </div>
    </div>
  );
};
