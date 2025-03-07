// "use client";
import { Occassion } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";
import { OccassionFetchError } from "../Shop/ErrorComps";

const ShopByOccasion = async () => {
  const getOccassionsFromCategories = async () => {
    const res = await fetch(appUrl("/api/occassions/all"), {
      next: {
        tags: ["categories"], // occassions are categories
      },
    });
    const data = await res.json();
    return data;
  };

  var occassions: Occassion[] = [];
  const data = await getOccassionsFromCategories();
  if (!data.data) {
    return <OccassionFetchError />;
  } else {
    occassions = data.data;
  }
  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Shop by Occasion
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {occassions.map((occassion: Occassion) => (
          <Link
            key={`occassion-cateogories-homepage -${occassion.id}`}
            className="group relative block rounded-xl"
            href={`/shop/occassion/${occassion.id}`}
          >
            <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
              <Image
                width="500"
                height="300"
                className="absolute start-0 top-0 size-full object-cover"
                src={occassion.thumb_image}
                alt={`Image describing ${occassion.name} occassion for fireworks`}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10">
              <div className="flex h-full flex-col p-4 sm:p-6">
                <h3 className="text-3xl font-semibold text-white group-hover:text-secondaryDark sm:text-4xl">
                  {occassion.name}
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
