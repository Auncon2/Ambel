import { useState } from "react";

export const PricingPage = () => {
  const [practitionerNumber, setPractitionerNumber] = useState(10); // State for Practitioner Number
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* ... (Title and Description - same as before) ... */}

        {/* ... (Monthly/Yearly Toggle - same as before) ... */}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ... (Pay As You Go Card - same as before) ... */}

          {/* ... (Practitioner Card - same as before) ... */}

          {/* Enterprise Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
            <div className="mt-4">
              <p className="text-5xl font-bold text-indigo-600">
                ${practitionerNumber}
              </p>{" "}
              {/* Dynamic Number */}
              <p className="mt-2 text-gray-500">Practitioner Number</p>
            </div>
            <ul className="mt-6 space-y-3">
              {/* ... (Enterprise Features - same as before) ... */}
            </ul>
            <div className="mt-8">
              <input
                type="number"
                value={practitionerNumber}
                onChange={(e) =>
                  setPractitionerNumber(parseInt(e.target.value, 10) || 0)
                } // Update state
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="w-full mt-4 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
