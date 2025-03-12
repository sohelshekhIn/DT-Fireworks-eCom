"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import {
  NoProductsFound,
  OccassionNotFound,
} from "@/components/Shop/ErrorComps";
import ProductCard from "@/components/Shop/ProductCard";
import { Occassion } from "@/types/category";
import { Product } from "@/types/product";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const OccasionPage = () => {
  const params = useParams();
  const [occasion, setOccasion] = useState<Occassion | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!params.occassionId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const [occasionRes, productsRes] = await Promise.all([
          fetch(appUrl(`/api/occassions/one?occassion=${params.occassionId}`)),
          fetch(appUrl(`/api/products/all?category=${params.occassionId}`)),
        ]);

        if (!occasionRes.ok) {
          setError(true);
          return;
        }

        const occasionData = await occasionRes.json();
        if (!occasionData.data) {
          setError(true);
          return;
        }

        setOccasion(occasionData.data);

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
  }, [params.occassionId]);

  if (loading) {
    return <OccasionSkeleton />;
  }

  if (error || !occasion) {
    return <OccassionNotFound />;
  }

  if (!products || products.length === 0) {
    return (
      <>
        <OccasionHeader occasion={occasion} />
        <Breadcrumb
          crumbs={[
            {
              name: "Shop",
              href: "/shop/",
            },
            {
              name: occasion.name,
              href: `/shop/occassion/${params.occassionId}`,
            },
          ]}
        />
        <NoProductsFound />
      </>
    );
  }

  return (
    <section className="mx-auto w-[85vw] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
      <OccasionHeader occasion={occasion} />
      <Breadcrumb
        crumbs={[
          {
            name: "Shop",
            href: "/shop/",
          },
          {
            name: occasion.name,
            href: `/shop/occassion/${params.occassionId}`,
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

export default OccasionPage;

const OccasionSkeleton = () => {
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

const OccasionHeader = ({ occasion }: { occasion: Occassion }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-xl">
      <div className="relative">
        <Image
          width={1200}
          height={300}
          className="max-h-96 w-full object-cover object-center"
          src={occasion.thumb_image}
          alt="Header Image for occasion"
        />
        <div className="absolute inset-0 z-[2] h-full w-full bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute top-20 z-[3] flex h-full w-full flex-col items-center justify-center p-5 text-secondaryDark">
          <h2 className="w-full text-center text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {occasion.name}
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
