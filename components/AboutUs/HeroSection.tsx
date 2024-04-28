const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black to-transparet bg-black rounded-t-xl">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Orchestrating Fireworks & Pyrotechnic Displays for Unforgettable
            Events
          </h1>
        </div>
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400 hover:text-secondaryDark slow-transition">
            Lighting Up Celebrations Since 1999
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
