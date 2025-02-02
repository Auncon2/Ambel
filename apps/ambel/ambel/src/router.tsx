import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

const PricingPage = React.lazy(
  () => import("../../../planning/planning/src/components/Homepage")
);

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pricing",
    element: (
      <React.Suspense fallback={<div>Loading Pricing...</div>}>
        <PricingPage />
      </React.Suspense>
    ),
  },
]);
