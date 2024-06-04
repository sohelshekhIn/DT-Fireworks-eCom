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
      }
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
      }
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
                  name: "Home",
                  href: "/",
                },
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
      <section
        className="
        w-[85vw] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto
    "
      >
        <CategoryHeader category={category} />
        <Breadcrumb
          crumbs={[
            {
              name: "Home",
              href: "/",
            },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 lg:mt-14">
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

const CategoryHeader = ({ category }: { category: Category }) => {
  return (
    <div className="w-full rounded-t-xl overflow-hidden">
      <div className="relative">
        <Image
          width={1200}
          height={300}
          className="w-full max-h-96 object-cover object-center"
          src={category.thumb_image}
          alt="Header Image for occassion"
        />
        <div
          className="absolute z-[2] inset-0 h-full w-full
             bg-gradient-to-t from-black via-black/80 to-transparent"
        ></div>
        <div className="absolute w-full h-full z-[3] top-20 p-5 text-secondaryDark flex flex-col justify-center items-center">
          <h2 className="text-2xl w-full text-center font-bold md:text-4xl md:leading-tight dark:text-white">
            {category.name}
          </h2>
          <p className="mt-1 text-white/70 text-center w-full">
            Decorate your wedding stage with our Wedding Fireworks & SFX
            package.
          </p>
        </div>
      </div>
    </div>
  );
};
