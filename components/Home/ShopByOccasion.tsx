"use client";

import { Occasion } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OccasionFetchError } from "../Shop/ErrorComps";

const ShopByOccasion = () => {
  const [occasions, setOccasions] = useState<Occasion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOccasions = async () => {
      try {
        const res = await fetch(appUrl("/api/occasions/all"), {
          next: {
            tags: ["categories"],
          },
        });

        if (!res.ok) {
          setError(true);
          return;
        }

        const data = await res.json();
        if (data.data) {
          setOccasions(data.data);
        }
      } catch (error) {
        console.error("Error fetching occasions:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOccasions();
  }, []);

  if (loading) {
    return <OccasionsSkeleton />;
  }

  if (error || occasions.length === 0) {
    return <OccasionFetchError />;
  }

  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
          Shop by Occasion
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {occasions.map((occasion) => (
          <Link
            key={occasion.id}
            href={`/shop/occasion/${occasion.id}`}
            className="group relative block overflow-hidden rounded-xl"
          >
            <div className="relative h-[350px]">
              <Image
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={occasion.thumb_image}
                alt={occasion.name}
                width={400}
                height={350}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white">
                  {occasion.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByOccasion;

const OccasionsSkeleton = () => {
  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative h-[350px] animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
          ></div>
        ))}
      </div>
    </section>
  );
};
