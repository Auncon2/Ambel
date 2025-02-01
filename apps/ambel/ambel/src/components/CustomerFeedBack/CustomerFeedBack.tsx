export const CustomerFeedBack = () => {
  const complianceIcons = [
    { src: "/homePage/complianceIcon/PCI logo.svg", alt: "PCI Compliance" },
    { src: "/homePage/complianceIcon/AICPA-Logo.svg", alt: "AICPA Logo" },
    { src: "/homePage/complianceIcon/GDPR logo.svg", alt: "GDPR Compliance" },
    { src: "/homePage/complianceIcon/ISO logo.svg", alt: "ISO Certification" },
    { src: "/homePage/complianceIcon/Hipaa Logo.svg", alt: "HIPAA Compliance" },
    { src: "/homePage/complianceIcon/PHIPA logo.svg", alt: "PHIPA Compliance" },
  ];
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex justify-between gap-36">
        <div className="space-y-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight">
              Our Customer Feedback
            </h2>
            <p className="text-primary_ mt-2">
              Don't take our word for it. Trust our customers.
            </p>
            <div className="flex mt-4">
              <a href="#" className="text-sm text-primary hover:underline">
                Explore all →
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <img
                    key={index}
                    src="/star-icon.png" // Replace with the correct path
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
            </div>
            <p className="text-lg text-foreground">
              "Ambit has been a game-changer for my Medi Spa! Managing bookings,
              payments, and client communication is now so streamlined that my
              team and I can focus more on providing exceptional service rather
              than on administrative tasks."
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <img
                  alt="Artika Johnson"
                  loading="lazy"
                  className="rounded-full object-cover border-2 border-primary_"
                  src="/path-to-image.jpg" // Replace with the correct image path
                />
              </div>
              <div>
                <p className="font-medium text-lg">Artika Johnson</p>
                <p className="text-sm text-muted-foreground">CEO, Medi Spa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[576px] h-[496px] relative">
          <img
            alt="Customer Review"
            loading="lazy"
            width="496"
            height="500"
            decoding="async"
            src="/homePage/review/Review Home.webp"
            className="color-transparent"
          />
        </div>
      </div>
      <div className="pb-16">
        <h1 className="text-4xl text-center font-semibold">
          Protect your Organization with proper security measures
        </h1>
        <div className="flex flex-wrap justify-center gap-10 my-8">
          {complianceIcons.map((icon, index) => (
            <img
              key={index}
              alt={icon.alt}
              loading="lazy"
              width="120"
              height="120"
              decoding="async"
              src={icon.src}
              className="color-transparent"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
