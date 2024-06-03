import { Occassion } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";

const ShopByOccasion = async () => {
  const getOccassionsFromCategories = async () => {
    const res = await fetch(appUrl("/api/occassions/all"), {
      next: {
        tags: ["categories"], // occassions are categories
      },
    });
    const data = await res.json();
    return data.categories;
  };

  const occassions: Occassion[] = await getOccassionsFromCategories();

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Shop by Occasion
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {occassions.map((occassion: Occassion) => (
          <Link
            key={`occassion-cateogories-homepage -${occassion.id}`}
            className="group relative block rounded-xl"
            href={`/shop/occassion/${occassion.id}`}
          >
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
              <Image
                width="500"
                height="300"
                className="size-full absolute top-0 start-0 object-cover"
                src={occassion.thumb_image}
                alt={`Image describing ${occassion.name} occassion for fireworks`}
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-3xl sm:text-4xl font-semibold text-white group-hover:text-secondaryDark">
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
