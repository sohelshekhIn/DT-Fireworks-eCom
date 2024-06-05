import {
  CategoryBagde,
  DisplayPrice,
  ProductMediaCarousel,
  SingleProductImage,
  ThreeLineStrikesDesignElement,
} from "@/components/Shop/ProductPageComps";
import QuantitySelector from "@/components/Shop/QuantitySelector";
import { redirect } from "next/navigation";
import appUrl from "@/utils/apiCallHandler";
import { Product } from "@/types/product";
import { Breadcrumb } from "@/components/Breadcrumb";
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
      }
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
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
            <div className="mt-10 p-5 space-y-16 lg:mt-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <div className="space-y-5">
                <CategoryBagde categories={product.categories} />
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                  Fully customizable rules to match your unique needs
                </h2>
                <p className="mt-4 text-gray-600 dark:text-neutral-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  imperdiet, diam nec feugiat volutpat, tellus orci hendrerit
                  sem,
                </p>
              </div>
              <div className="">
                <QuantitySelector />
                <div className="flex items-center justify-between mt-5">
                  <DisplayPrice product={product} />
                  <button className="px-3 py-2 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-md dark:bg-primaryDark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden absolute inset-0 md:grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-full rounded-xl dark:bg-neutral-800"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
