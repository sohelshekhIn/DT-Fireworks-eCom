import { Breadcrumb } from "@/components/Breadcrumb";
import { NotFoundSapien } from "@/public/images";
import { Category } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";

const ShopPage = async () => {
  const getActiveCategories = async () => {
    try {
      const res = await fetch(appUrl("/api/categories/all"), {
        next: {
          tags: ["categories"],
          revalidate:
            60 * parseInt(process.env.NEXT_PUBLIC_API_REVALIDATE || "60"),
        },
      });

      if (!res.ok) {
        console.error(
          "Failed to fetch categories:",
          res.status,
          res.statusText,
        );
        return { data: null };
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return { data: null };
    }
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
    )
  );
};

export default ShopPage;
export const dynamic = "force-dynamic";

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
