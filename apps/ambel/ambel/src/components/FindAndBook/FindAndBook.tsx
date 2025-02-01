import { useState } from "react";

const FindAndBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const tags = [
    "Jane",
    "Calendly",
    "Cal.com",
    "Acuity",
    "Square appointment",
    "Simplybook.me",
    "Zenoti",
    "Appointy",
    "Set More",
    "Honey Book",
  ];
  const brandData = [
    {
      heading: "One brand in one easy to use system, across all your locations",
      description:
        "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
      imageSrc: "/homePage/ScrollCards/Multi Branch FF.webp",
      link: "/#",
    },
    {
      heading: "Another Brand System Example",
      description: "A different description for another brand system.",
      imageSrc: "/path/to/another-image.webp",
      link: "/another-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
    {
      heading: "Third Brand System Example",
      description: "This is a third example with a custom description.",
      imageSrc: "/path/to/third-image.webp",
      link: "/third-link",
    },
  ];
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle the search logic here
  //   console.log("Searching for:", searchTerm, "in location:", location);
  // };

  return (
    <div className="mx-auto max-[1400px]">
      <section className="py-[60px] space-y-[40px]">
        <div>
          <div className="relative">
            <div
              className="w-full mx-auto py-12 border rounded-[36px] mb-3 md:mb-10 flex flex-col items-center"
              style={{ position: "sticky", top: "20vh", zIndex: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
                Find and Book Appointments with Local
                <br />
                and International Professionals
              </h1>
              <div className="max-w-[1016px]">
                <form
                  className="flex flex-col md:flex-row gap-4 mb-8"
                  // onSubmit={handleSearchSubmit}
                >
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search Doctor, Therapist, Consultant, Spa"
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="10" r="3"></circle>
                        <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Select your location"
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-btn-primary text-white font-medium rounded-full transition-colors"
                  >
                    Search
                  </button>
                </form>
                <div className="space-y-4">
                  <p className="text-gray-600">Are you looking for</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Doctor",
                      "Lawyer",
                      "Therapist",
                      "Barber",
                      "Spa",
                      "Med Spa",
                      "Psychiatrist",
                      "Consultancy firm",
                    ].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-[14px] py-[6px] rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer text-sm"
                      >
                        {item}
                        <svg
                          className="w-3 h-3 ml-1 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </span>
                    ))}
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-processing_ hover:bg-gray-100 cursor-pointer text-sm">
                      More
                      <svg
                        className="w-3 h-3 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-processing_ hover:underline inline-flex items-center"
                  >
                    Explore advance search
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Brand cards with sticky stacking */}
            {brandData.map((brand, index) => (
              <div
                key={index}
                className="  bg-[#00B0AD] text-white py-8 px-6 rounded-[32px] shadow-md max-w-[1260px] mx-auto h-[480px]"
                style={{ position: "sticky", top: "20vh", zIndex: index+1 }}
              >
                <div className="md:w-[625px] space-y-8 flex flex-col justify-center h-full pl-12">
                  <h3 className="custom-heading text-white">{brand.heading}</h3>
                  <p>{brand.description}</p>
                  <a
                    className="flex items-center gap-2 underline decoration-1 underline-offset-4"
                    href={brand.link}
                  >
                    Learn More
                  </a>
                </div>
                <div className="md:max-w-[608px] flex justify-end">
                  <img
                    src={brand.imageSrc}
                    alt={brand.heading}
                    className="rounded-2xl max-w-[200px] md:max-w-full w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <span className="font-bold text-primary_">Replace:</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm rounded-full bg-[#F0F9FF] text-[#016DA3] font-medium cursor-pointer hover:bg-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FindAndBook;
