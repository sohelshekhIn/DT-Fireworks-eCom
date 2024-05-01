import {
  CategoryBagde,
  ProductMediaCarousel,
  SingleProductImage,
  ThreeLineStrikesDesignElement,
} from "@/components/Shop/ProductPageComps";
import QuantitySelector from "@/components/Shop/QuantitySelector";
import Image from "next/image";
import { product } from "@/data/DummyData";
const ProductPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-0 md:p-5">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative">
              {product.images.length > 1 ? (
                <ProductMediaCarousel productMediaList={product.images} />
              ) : (
                <SingleProductImage image={product.images[0]} />
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
                imperdiet, diam nec feugiat volutpat, tellus orci hendrerit sem,
              </p>
            </div>
            <div className="">
              <QuantitySelector />
              {/* if product.discount is true slash the original price and show discounted price */}
              <div className="flex items-center justify-between mt-5">
                {product.onSale ? (
                  <div className="flex gap-5 items-center">
                    <p className="text-lg font-semibold text-gray-500 dark:text-neutral-400 line-through">
                      ₹{product.price}
                    </p>
                    <p className="text-3xl font-semibold text-primary dark:text-primaryDark">
                      ₹{product.price * (1 - product.discount / 100)}
                    </p>
                  </div>
                ) : (
                  <p className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    ₹{product.price}
                  </p>
                )}
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
  );
};

export default ProductPage;
