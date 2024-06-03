import { NotFoundSapien } from "@/public/images";
import { Category } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";

const ShopPage = async () => {
  const getActiveCategories = async () => {
    const res = await fetch(appUrl("/api/categories/all"), {
      next: {
        tags: ["categories"],
        revalidate:
          60 * parseInt(process.env.NEXT_PUBLIC_API_REVALIDATE || "60"),
      },
    });
    const data = await res.json();
    return data;
  };

  var categories: Category[] | null = null;
  const data = await getActiveCategories();

  if (!data.data || data.data.length === 0) {
    return <NoCategoriesFound />;
  } else {
    categories = data.data;
  }

  return (
    categories && (
      <section className="w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Shop
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Buy from our extensive range of products & categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {categories.map((category: Category) => (
            <Link
              key={`shop-category-list-${category.id}`}
              className="group relative block rounded-xl"
              href={`/shop/${category.isOccassion ? "occassion" : "category"}/${
                category.id
              }`}
            >
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[250px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
                <Image
                  width="300"
                  height="200"
                  className="size-full absolute top-0 start-0 object-cover"
                  src={category.thumb_image}
                  alt={`Image describing ${category.name} category for fireworks`}
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-secondaryDark">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  );
};

export default ShopPage;

const NoCategoriesFound = () => {
  return (
    <section className="w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl min-h-dvh mx-auto text-center mb-10 lg:mb-14">
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
          className="mt-10 text-primary dark:text-primaryDark font-semibold underline"
        >
          Go Back to Shop
        </Link>
      </div>
    </section>
  );
};
