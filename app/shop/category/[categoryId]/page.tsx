import { NotFoundSapien } from "@/public/images";
import { Category } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const CategoryPage = async ({
  params,
}: {
  params: {
    categoryId: string;
  };
}) => {
  const getCategory = async (categoryId: string) => {
    const res = await fetch(
      appUrl("/api/categories/one?category=" + categoryId),
      {
        next: {
          tags: ["categories"],
        },
      }
    );
    const data = await res.json();
    return data;
  };

  if (params.categoryId == "") {
    return redirect("/");
  }

  var category: Category | null = null;
  const data = await getCategory(params.categoryId);
  if (!data.data) {
    return <CategoryNotFound />;
  } else {
    category = data.data;
  }

  return (
    category && (
      <section
        className="
        w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto
    "
      >
        {category.name}
      </section>
    )
  );
};

export default CategoryPage;

const CategoryNotFound = () => {
  return (
    <section
      className="
        w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto
    "
    >
      <div className="max-w-2xl min-h-dvh mx-auto text-center mb-10 lg:mb-14">
        <Image
          width={500}
          height={500}
          className="mx-auto"
          src={NotFoundSapien}
          alt="A male standing in nowhere describing the Category user was looking is not found & does not exists"
        />
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Category/Occassion Not Found
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          The category/occassion you are looking for is not available.
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
