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

  // fetch products from this occassion

  return (
    occassion && (
      <section
        className="w-[85vw] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto
    "
      >
        <div className="w-full">
          <div className="relative">
            <Image
              width={1200}
              height={300}
              className="w-full max-h-96 object-cover object-center"
              src={occassion.thumb_image}
              alt="Header Image for occassion"
            />
            <div
              className="absolute z-[2] inset-0 h-full w-full
             bg-gradient-to-t from-black via-black/80 to-transparent"
            ></div>
            <div className="absolute w-full h-full z-[3] top-20 p-5 text-secondaryDark flex flex-col justify-center items-center">
              <h2 className="text-2xl w-full text-center font-bold md:text-4xl md:leading-tight dark:text-white">
                {occassion.name}
              </h2>
              <p className="mt-1 text-white/70 text-center w-full">
                Decorate your wedding stage with our Wedding Fireworks & SFX
                package.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default OccasionPage;
