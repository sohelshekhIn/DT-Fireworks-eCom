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
import { redirect } from "next/navigation";

const CategoryPage = async ({
  params,
}: {
  params: {
    categoryId: string;
  };
}) => {
  if (params.categoryId == "") {
    return redirect("/");
  }

  const getCategory = async (categoryId: string) => {
    const res = await fetch(
      appUrl("/api/categories/one?category=" + categoryId),
      {
        next: {
          tags: ["categories"],
        },
      },
    );
    const status = res.status;
    if (status === 404) {
      return { data: null };
    }
    const data = await res.json();
    return data;
  };

  const getProducts = async (categoryId: string) => {
    const res = await fetch(
      appUrl("/api/products/all?category=" + categoryId),
      {
        next: {
          tags: ["occassion-products"],
          revalidate:
            60 * parseInt(process.env.NEXT_PUBLIC_API_REVALIDATE || "60"),
        },
      },
    );
    const status = res.status;
    if (status === 404) {
      return { data: null };
    }
    const data = await res.json();
    return data;
  };

  var category: Category | null = null;
  var products: Product[] | null = null;
  const data = await getCategory(params.categoryId);
  if (!data.data) {
    return <CategoryNotFound />;
  } else {
    category = data.data;
    const productsData = await getProducts(params.categoryId);

    if (!productsData.data || productsData.data.length === 0) {
      return (
        category && (
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
                  href: "/shop/category/" + category.id + "/page",
                },
              ]}
            />
            <NoProductsFound />
          </>
        )
      );
    } else {
      products = productsData.data;
    }
  }

  return (
    category && (
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
              href: "/shop/category/" + category.id + "/page",
            },
          ]}
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-14">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    )
  );
};

export default CategoryPage;
export const dynamic = "force-dynamic";

const CategoryHeader = ({ category }: { category: Category }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-xl">
      <div className="relative">
        <Image
          width={1200}
          height={300}
          className="max-h-96 w-full object-cover object-center"
          src={category.thumb_image}
          alt="Header Image for occassion"
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
