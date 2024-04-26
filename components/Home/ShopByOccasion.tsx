import Image from "next/image";
import Link from "next/link";

const ShopByOccasion = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Shop by Occasion
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <Link className="group relative block rounded-xl" href="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
            <Image
              width="500"
              height="300"
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1592843997881-cab3860b1067?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Diwali fireworks in the night sky with city lights (Jodhpur city, India)"
            />
          </div>

          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Diwali
              </h3>
            </div>
          </div>
        </Link>
        <Link className="group relative block rounded-xl" href="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
            <Image
              width="500"
              height="300"
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Birtday table with cake, balloons, gifts and poppers"
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Birthdays
              </h3>
            </div>
          </div>
        </Link>

        <Link className="group relative block rounded-xl" href="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
            <Image
              width="500"
              height="300"
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Wedding fireworks in the night sky"
            />
          </div>

          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Wedding
              </h3>
            </div>
          </div>
        </Link>
        <Link className="group relative block rounded-xl" href="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
            <Image
              width="500"
              height="300"
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cricket stadium at night with flood lights on"
            />
          </div>

          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Cricket Match
              </h3>
            </div>
          </div>
        </Link>
        <Link className="group relative block rounded-xl" href="#">
          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900">
            <Image
              width="500"
              height="300"
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Birtday table with cake, balloons, gifts and poppers"
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                Birthdays
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopByOccasion;
