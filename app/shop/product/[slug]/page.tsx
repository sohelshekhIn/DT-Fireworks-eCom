import {
  CategoryBagde,
  DisplayPrice,
  ProductMediaCarousel,
  SingleProductImage,
  ThreeLineStrikesDesignElement,
} from "@/components/Shop/ProductPageComps";

import { redirect } from "next/navigation";
import appUrl from "@/utils/apiCallHandler";
import { Product } from "@/types/product";
import { Breadcrumb } from "@/components/Breadcrumb";
import { QuantitySelectorGroup } from "@/components/Shop/QuantitySelectors";
import { AddToCartBtn } from "@/components/Cart/CartComps";
const ProductPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  if (params.slug == "") {
    return redirect("/");
  }

  const getProductInfo = async (productId: string) => {
    const res = await fetch(
      appUrl("/api/products/one?productId=" + productId),
      {
        next: {
          tags: ["product"],
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

  var product: Product | null = null;
  const data = await getProductInfo(params.slug);
  if (!data.data) {
    return redirect("/");
  } else {
    product = data.data;
  }

  return (
    product && (
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Breadcrumb
          crumbs={[
            { name: "Shop", href: "/shop" },
            { name: product.name, href: `/shop/product/${product.id}` },
          ]}
        />
        <div className="relative p-0 md:p-5">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="relative">
                {product.media.images.length > 1 ||
                product.media.videos.length > 1 ? (
                  <ProductMediaCarousel productMediaList={product.media} />
                ) : (
                  <SingleProductImage image={product.media.images[0]} />
                )}

                <ThreeLineStrikesDesignElement />
              </div>
            </div>
            <div className="mt-10 space-y-16 p-5 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mt-0">
              <div className="space-y-5">
                <CategoryBagde categories={product.categories} />
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-neutral-200">
                  Fully customizable rules to match your unique needs
                </h2>
                <p className="mt-4 text-gray-600 dark:text-neutral-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  imperdiet, diam nec feugiat volutpat, tellus orci hendrerit
                  sem,
                </p>
              </div>
              <div className="">
                <QuantitySelectorGroup />
                <div className="mt-5 flex items-center justify-between">
                  <DisplayPrice product={product} />
                  <AddToCartBtn product={product} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 hidden size-full grid-cols-12 md:grid">
            <div className="col-span-full h-full w-full rounded-xl bg-gray-100 lg:col-span-7 lg:col-start-6 dark:bg-neutral-800"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
