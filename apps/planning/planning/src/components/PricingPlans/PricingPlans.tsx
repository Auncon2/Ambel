import { useState } from "react";

const pricingPlans = [
  {
    id: 1,
    icon: "/pricecard/Featured icon (3).png",
    checkicon: "/pricecard/Check icon.png",
    name: "Pay As You Go",
    price: "10%",
    description: "10% from your customer payment",
    features: [
      "Only pre-paid booking",
      "Both practitioner and Organization",
      "Up to 5 practitioners in organization",
      "2 staff members are allowed",
      "Basic chat and email support",
    ],
  },
  {
    id: 2,
    icon: "/pricecard/Featured icon (1).png",
    checkicon: "/pricecard/Check icon.png",
    name: "Practitioner",
    price: "49",
    description: "1 practitioner license/monthly",

    features: [
      "All booking options",
      "All schedule Feature",
      "Individual single practitioner license",
      "3 staff members are allowed",
      "Unlimited email marketing",
    ],
  },
  {
    id: 3,
    icon: "/pricecard/Featured icon (1).png",
    checkicon: "/pricecard/Check icon.png",
    name: "Enterprise",
    price: "39",
    description: "Practitioner Number",
    features: [
      "All booking options",
      "Only for Organization",
      "Unlimited practitioners and staff",
      "Customizable 6 page website",
      "E-commerce functionality",
    ],
  },
];

export const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <>
      <div className="relative flex flex-col justify-center items-center text-center pt-[120px] pb-[500px] overflow-hidden">
        {/* Slanted Background */}
        <div className="absolute top-0 left-0 w-full h-[700px] bg-[#f5fffa] -skew-y-6 origin-bottom"></div>

        {/* Content */}
        <div className="relative z-10">
          <span className="bg-[#eff5fa] py-1 px-4 text-[13px] rounded-2xl">
            Pricing plans
          </span>
          <p className="text-[#307d33] text-[42px] font-semibold">
            Let's Get Started
          </p>
          <p className="text-[#307d33] text-[42px] font-semibold -mt-3">
            We've got a Plan that's perfect for you.
          </p>
          <p className="text-blue-400 text-[18px] mt-4">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>

          {/* Toggle Button */}
          <div className="flex justify-center">
            <div className="mt-9 p-1 bg-[#ececec] border border-slate-100 rounded-md shadow-md w-[339px] flex justify-between items-center">
              <button
                onClick={() => setIsYearly(false)}
                className={`h-[40px] w-[164px] font-bold rounded-md ${
                  !isYearly
                    ? "bg-white text-black"
                    : "bg-transparent text-black"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`h-[40px] w-[164px] rounded-md font-bold ${
                  isYearly ? "bg-white text-black" : "bg-transparent text-black"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*......................................... Price Card............................... */}
      <div className="flex flex-wrap justify-center gap-6 py-12  -mt-[400px] relative z-10">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className=" bg-white shadow-lg rounded-xl  flex flex-col items-center text-center border border-gray-200 overflow-hidden"
          >
            <div className=" bg-white  p-6 flex flex-col items-center text-center ">
              {/* Image Icon */}
              <img
                src={plan.icon}
                alt={plan.name}
                className="w-10 h-10 object-contain"
              />

              {/* Package Name */}
              <h3 className="text-lg font-semibold text-green-800 mt-3">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="flex items-baseline mt-4">
                <span className="text-3xl font-bold">$</span>{" "}
                <span className="text-[42px] font-bold">{plan.price}</span>
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{plan.description}</p>

              {/* Features List */}
              <ul className="mt-7 space-y-2 w-[310px]">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <img
                      src={plan.checkicon}
                      alt={plan.name}
                      className="w-6 h-6 object-contain"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Get Started Button */}
            <div className="p-6 bg-[#f9fafb]">
              <button className="mt-auto bg-[#19525a] text-white text-sm text-center w-[310px] h-[44px]  rounded-lg  hover:bg-green-700 transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
