import { useState } from "react";

const PopularPractitioners = () => {
  const [activeCategory, setActiveCategory] = useState("Doctor");

  const categories = [
    { category: "Doctor" },
    { category: "Lawyer" },
    { category: "Spa & Salon" },
    { category: "Therapist" },
    { category: "Fitness" },
    { category: "Instructor" },
    { category: "Consultancy" },
  ];
  const cardData = [
    {
      id: 1,
      category: "Doctor",
      title: "Business solution for healthcare providers",
      description:
        "Our software allows Doctors and Medical Professionals to book appointments, manage their patients, provide online prescriptions, overview their med charts, and automatically send reminders for treatments.",
      imgSrc: "/pupularpractitioners/Doctor Open.svg",
      imgSrc2: "/pupularpractitioners/Doctor Close.svg",
      learnMoreLink: "/doctor-solutions",
    },
    {
      id: 2,
      category: "Lawyer",
      title: "Business solutions for Law Firms",
      description:
        "Ambel provides your Law Firm with document automation, case management, scheduling, booking, billing, custom invoice, installment and accounting features",
      imgSrc: "/pupularpractitioners/Lawyer Open.png",
      imgSrc2: "/pupularpractitioners/Lawyer Close.svg",
      learnMoreLink: "/dentist-solutions",
    },
    {
      id: 3,
      category: "Spa & Salon",
      title: "Effortless Scheduling for Spas & Salons",
      description:
        "Enable clients to book services online 24/7, reducing phone time, front desk operation streamlining appointment scheduling for your staff and reminders to reduce no shows, keeping schedules organized.",
      imgSrc: "/pupularpractitioners/Salone Open.png",
      imgSrc2: "/pupularpractitioners/Salone Close.svg",
      learnMoreLink: "/pharmacy-solutions",
    },
    {
      id: 4,
      category: "Therapist",
      title: "Simplify Your Therapy Practice with Intuitive Scheduling",
      description:
        "Spend less time on admin tasks with a user-friendly scheduler that handles bookings and cancellations. Stay organized and focus more on what matters most—your clients.",
      imgSrc: "/pupularpractitioners/Therapist open.png",
      imgSrc2: "/pupularpractitioners/Therapist Close.svg",
      learnMoreLink: "/pharmacy-solutions",
    },
    {
      id: 5,
      category: "Fitness",
      title: "Seamless Bookings for Trainers",
      description:
        "Make client booking easy with 24/7 online scheduling for classes and personal training sessions and diet chart. Offer package, memberships and track client progress—all in one place.",
      imgSrc: "/pupularpractitioners/Fitness Open.png",
      imgSrc2: "/pupularpractitioners/Fitness Close.svg",
      learnMoreLink: "/pharmacy-solutions",
    },
    {
      id: 6,
      category: "Instructor",
      title: "Give advice anytime from anywhere",
      description:
        "Effortlessly manage client booking with a scheduling solution designed for consulting. Enable clients to book online. Keep track of all sessions and client notes to deliver personalized, professional service every time.",
      imgSrc: "/pupularpractitioners/Instractor open.png",
      imgSrc2: "/pupularpractitioners/Instractor Close.svg",
      learnMoreLink: "/pharmacy-solutions",
    },
    {
      id: 7,
      category: "Consultancy",
      title: "Effortless Class Scheduling for Instructors",
      description:
        "Simplify your class management with scheduling tool designed for instructors. Allow clients to book sessions online, keep all class and client details organized in one place.",
      imgSrc: "/pupularpractitioners/Consultant Open.png",
      imgSrc2: "/pupularpractitioners/Consultant Close.svg",
      learnMoreLink: "/pharmacy-solutions",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-[63px] pb-[80px] max-w-[1366px] mx-auto">
      <div className="text-center flex flex-col items-center gap-4">
        <p className="text-[#FDB022]">Industries</p>
        <div className="max-w-[846px]">
          <h1 className="custom-heading2">
            Popular Businesses and Practitioners who use Ambel
          </h1>
        </div>
        <div className="max-w-[996px]">
          <p>
            Our platform supports a diverse range of professionals, with popular
            industries including: healthcare providers, medi spas, salons,
            fitness coaches, law agencies, beauty specialists, consultants, and
            therapists.
          </p>
        </div>
      </div>{" "}
      <div className="w-[903px] overflow-auto border border-emerald-700 rounded-[45px]">
        <div className="flex justify-between">
          {categories.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`min-w-fit rounded-[45px] px-6 py-2 font-semibold border-none transition-all ${
                activeCategory === category.category
                  ? "bg-[#19525a] text-white"
                  : "hover:bg-gray-200 hover:border-none"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-[20px]">
        {cardData.map((card) => (
          <div
            key={card.category}
            className="max-w-[524px] transition-all duration-[1700ms] ease-in-out overflow-hidden relative"
            onMouseEnter={() => setActiveCategory(card.category)}
          >
            {/* Hidden button (inactive state) */}
            <div
              className={
                activeCategory === card.category
                  ? "absolute top-0 left-0 opacity-0 transition-opacity duration-[1500ms] ease-in-out "
                  : "absolute top-0 left-0 opacity-100 transition-opacity duration-[1500ms] ease-in-out "
              }
            >
              <button className="h-[346px] flex items-center w-[110px]">
                <img
                  alt={card.category}
                  src={card.imgSrc2}
                  className="object-contain w-[110px] h-[346px]"
                />
              </button>
            </div>

            {/* Active Card Content */}

            <div
              className={`transition-opacity duration-[1700ms] ease-in-out ${
                activeCategory === card.category
                  ? "opacity-100  relative "
                  : "opacity-0 absolute"
              }`}
            >
              <div className="flex gap-[20px] h-[346px] p-[20px] bg-[#19525a] rounded-2xl">
                {/* Left Side Content */}
                <div className="space-y-3  text-left">
                  {/* Category Button */}
                  <div>
                    <button className="rounded-[45px] px-3 py-1 font-medium bg-white max-w-[200px] whitespace-nowrap">
                      {card.category}
                    </button>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-[20px] font-semibold text-white line-clamp-3 transition-opacity duration-500  ${
                      activeCategory === card.category
                        ? "opacity-100 "
                        : "opacity-0 absolute "
                    } delay-[1000ms]`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm text-white line-clamp-7 transition-opacity duration-500 ${
                      activeCategory === card.category
                        ? "opacity-100"
                        : "opacity-0"
                    } delay-[1250ms]`}
                  >
                    {card.description}
                  </p>

                  {/* Learn More Link */}
                  <div
                    className={`transition-opacity duration-500 ${
                      activeCategory === card.category
                        ? "opacity-100"
                        : "opacity-0"
                    } delay-[1300ms]`}
                  >
                    <a
                      href={card.learnMoreLink}
                      className="flex items-center gap-2 text-white decoration-1 underline-offset-4"
                    >
                      <span className="underline">Learn more</span>
                      <span className="ml-1 mt-1">
                        <img
                          alt="Learn More"
                          src="/pupularpractitioners/link-square-01.png"
                          className="object-contain h-5 w-5"
                        />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Right Side Image */}
                <div className="flex items-center flex-shrink-0 w-[218px]">
                  <img
                    alt={card.category}
                    src={card.imgSrc}
                    className="object-contain h-[310px] w-[218px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPractitioners;
