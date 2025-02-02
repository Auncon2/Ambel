export const Features = () => {
  const cardsData = [
    {
      id: 1,
      icon1: "/features/Website builder white.png",
      icon2: "/features/link-square-01.png",
      title: "Schedule & Booking",
      description:
        "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
    },
    {
      id: 2,
      icon1: "/features/Consultant white.png", 
      icon2: "/features/link-square-01.png",
      title: "Live Consultant",
      description:
        "Integrate meet, zoom and loom to communicate with your customers or clients in via video conference..",
    },
    {
      id: 3,
      icon1: "/features/Payment white.png", 
      icon2: "/features/link-square-01.png",
      title: "Payments",
      description:
        "Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere.",
    },
    {
      id: 4,
      icon1: "/features/Targeting white.png", 
      icon2: "/features/link-square-01.png",
      title: "Customer Tracking",
      description:
        "Manage customer, send marketing email and message, create record and track via note, case study.",
    },
    {
      id: 5,
      icon1: "/features/Vector (2).png", 
      icon2: "/features/link-square-01.png",
      title: "Notification",
      description:
        "Automatically notify your clients and practitioners with reminder via SMS and email by single setup.",
    },
    {
      id: 6,
      icon1: "/features/Website builder white.png", 
      icon2: "/features/link-square-01.png",
      title: "Website Builder",
      description:
        "Get a free website, design and customize your booking website for your business without any code.",
    },
    {
      id: 7,
      icon1: "/features/Report white.png", 
      icon2: "/features/link-square-01.png",
      title: "Reports",
      description:
        "Powerful data and graphs at your fingertips to monitor day to day activities and generate reports.",
    },
    {
      id: 8,
      icon1: "/features/Resources white.png", 
      icon2: "/features/link-square-01.png",
      title: "Resources",
      description:
        "Create and share resources like Prescriptions, Documentations, Medical Charts and Videos.",
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
              <h1 className="custom-heading ">
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
