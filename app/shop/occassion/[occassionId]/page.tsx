import { Breadcrumb } from "@/components/Breadcrumb";
import {
  NoProductsFound,
  OccassionNotFound,
} from "@/components/Shop/ErrorComps";
import ProductCard from "@/components/Shop/ProductCard";
import { Occassion } from "@/types/category";
import { Product } from "@/types/product";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import { redirect } from "next/navigation";

const OccasionPage = async ({
  params,
}: {
  params: {
    occassionId: string;
  };
}) => {
  if (params.occassionId == "") {
    return redirect("/");
  }

  const getOccassion = async (occassionId: string) => {
    const res = await fetch(
      appUrl("/api/occassions/one?occassion=" + occassionId),
      {
        next: {
          tags: ["occassions"],
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
  const getProducts = async (occassionId: string) => {
    const res = await fetch(
      appUrl("/api/products/all?category=" + occassionId),
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

  var occassion: Occassion | null = null;
  var products: Product[] | null = null;

  const occassionData = await getOccassion(params.occassionId);
  if (!occassionData.data) {
    return <OccassionNotFound />;
  } else {
    occassion = occassionData.data;
    const productsData = await getProducts(params.occassionId);

    if (!productsData.data || productsData.data.length === 0) {
      return (
        occassion && (
          <>
            <OccassionHeader occassion={occassion} />
            <Breadcrumb
              crumbs={[
                {
                  name: "Shop",
                  href: "/shop/",
                },
                {
                  name: occassion.name,
                  href: "/shop/category/" + occassion.id + "/page",
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
    occassion &&
    products && (
      <section className="mx-auto w-[85vw] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <OccassionHeader occassion={occassion} />
        <Breadcrumb
          crumbs={[
            {
              name: "Shop",
              href: "/shop/",
            },
            {
              name: occassion.name,
              href: "/shop/category/" + occassion.id + "/page",
            },
          ]}
        />
        <div className="">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    )
  );
};

const OccassionHeader = ({ occassion }: { occassion: Occassion }) => {
  return (
    <div className="w-full overflow-hidden rounded-t-xl">
      <div className="relative">
        <Image
          width={1200}
          height={300}
          className="max-h-96 w-full object-cover object-center"
          src={occassion.thumb_image}
          alt="Header Image for occassion"
        />
        <div className="absolute inset-0 z-[2] h-full w-full bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute top-20 z-[3] flex h-full w-full flex-col items-center justify-center p-5 text-secondaryDark">
          <h2 className="w-full text-center text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {occassion.name}
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
