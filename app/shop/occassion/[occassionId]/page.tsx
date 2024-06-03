import { OccassionNotFound } from "@/components/Shop/ErrorComps";
import { Occassion } from "@/types/category";
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
