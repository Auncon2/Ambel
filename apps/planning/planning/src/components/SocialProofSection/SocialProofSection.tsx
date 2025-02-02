export const SocialProofSection = () => {
  const brands = [
    {
      src: "/socialproofsection/Aqua.png",
      width: 183,
      height: 48,
      alt: "Aqua",
    },
    {
      src: "/socialproofsection/logo cfr.png",
      width: 120,
      height: 58,
      alt: "CFR",
    },
    {
      src: "/socialproofsection/mucha_marketing.png",
      width: 160,
      height: 48,
      alt: "Mucha Marketing",
    },
    {
      src: "/socialproofsection/RH-logo.svg",
      width: 58,
      height: 58,
      alt: "RH Logo",
    },
    {
      src: "/socialproofsection/skin_precision.svg",
      width: 173,
      height: 48,
      alt: "Skin Precision",
    },
    {
      src: "/socialproofsection/SpaTruCLINICS.png",
      width: 157,
      height: 48,
      alt: "Spa Tru Clinics",
    },
  ];
  return (
    <section className="w-full bg-[#fafafa] text-center font-[500px] pb-[70px] pt-[90px] mb-[120px]">
      <p>
        Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the
        World
      </p>{" "}
      <div className="flex items-center justify-center space-x-16 pt-[60px] animate-loop-scroll group-hover:paused min-w-full">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={brand.src}
              width={brand.width}
              height={brand.height}
              alt={brand.alt}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
