import { NotFoundSapien } from "@/public/images";
import { Occassion } from "@/types/category";
import appUrl from "@/utils/apiCallHandler";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const OccasionPage = async ({
  params,
}: {
  params: {
    occassionId: string;
  };
}) => {
  const getOccassion = async (occassionId: string) => {
    const res = await fetch(
      appUrl("/api/occassions/one?occassion=" + occassionId),
      {
        next: {
          tags: ["occassions"],
          revalidate:
            60 * parseInt(process.env.NEXT_PUBLIC_API_REVALIDATE || "60"),
        },
      }
    );
    const data = await res.json();
    return data;
  };

  if (params.occassionId == "") {
    return redirect("/");
  }

  var occassion: Occassion | null = null;
  const data = await getOccassion(params.occassionId);
  if (!data.data) {
    return <OccassionNotFound />;
  } else {
    occassion = data.data;
  }

  return (
    occassion && (
      <section
        className="
        w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto
    "
      >
        <div className="h-32 w-full overflow-hidden">
          <Image
            width={600}
            height={200}
            src={occassion.thumb_image}
            alt="Header Image for occassion"
          />
        </div>
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          {occassion.name}
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400"></p>
      </section>
    )
  );
};

export default OccasionPage;

const OccassionNotFound = () => {
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
          alt="A male standing in nowhere describing the Occassion user was looking is not found & does not exists"
        />
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Occassion Not Found
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          The occassion you are looking for is not available.
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
