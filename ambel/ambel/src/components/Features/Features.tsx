import React from "react";

export const Features = () => {
  const cardsData = [
    {
      id: 1,
      icon1: "path/to/icon1.png", // replace with actual image path
      icon2: "path/to/icon2.png", // replace with actual image path
      title: "Schedule & Booking",
      description:
        "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
    },
    {
      id: 2,
      icon1: "path/to/icon3.png", // replace with actual image path
      icon2: "path/to/icon4.png", // replace with actual image path
      title: "Another Feature",
      description: "Another description for this feature.",
    },
    {
      id: 3,
      icon1: "path/to/icon3.png", // replace with actual image path
      icon2: "path/to/icon4.png", // replace with actual image path
      title: "Another Feature",
      description: "Another description for this feature.",
    },
    {
      id: 4,
      icon1: "path/to/icon3.png", // replace with actual image path
      icon2: "path/to/icon4.png", // replace with actual image path
      title: "Another Feature",
      description: "Another description for this feature.",
    },
    {
      id: 5,
      icon1: "path/to/icon1.png", // replace with actual image path
      icon2: "path/to/icon2.png", // replace with actual image path
      title: "Schedule & Booking",
      description:
        "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
    },
    {
      id: 6,
      icon1: "path/to/icon3.png", // replace with actual image path
      icon2: "path/to/icon4.png", // replace with actual image path
      title: "Another Feature",
      description: "Another description for this feature.",
    },
    {
      id: 7,
      icon1: "path/to/icon3.png", // replace with actual image path
      icon2: "path/to/icon4.png", // replace with actual image path
      title: "Another Feature",
      description: "Another description for this feature.",
    },
    {
      id: 8,
      icon1: "path/to/icon3.png", // replace with actual image path
      icon2: "path/to/icon4.png", // replace with actual image path
      title: "Another Feature",
      description: "Another description for this feature.",
    },
  ];
  return (
    <div className="max-w-full bg-[#19525a] flex justify-center">
      <div className="mx-auto w-[1400px]">
        <div className="w-[92%] md:w-[90%] mx-auto">
          <section className="text-center py-[70px] space-y-[80px]">
            {/* Header section */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-[#FDB022]">Features</p>
              <h1 className="custom-heading text-white">
                Solve all your needs with a single software solution
              </h1>
              <div className="max-w-[768px]">
                <p className="text-white text-[18px]">
                  This platform streamlines the entire customer management
                  process, saving businesses time and increasing efficiency.
                  Trusted by over 60+ businesses.
                </p>
              </div>
            </div>
            {/* Card Section */}
            <div className="flex flex-wrap items-center gap-4">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className="p-5 space-y-[20px] w-[300px] rounded-[20px] bg-[#FFFFFF] bg-opacity-10 border-[1px] border-transparent hover:border-white hover:shadow-[0px_0px_16px_4px_rgba(255,255,255,0.25)] transition-all"
                >
                  <div className="flex justify-between items-center">
                    <img src={card.icon1} alt="icon" width="25" height="26" />
                    <img src={card.icon2} alt="icon" width="21" height="20" />
                  </div>
                  <div className="text-left text-white space-y-[10px]">
                    <h3 className="text-[20px] font-[500]">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
