import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

const PricingPage = React.lazy(
  () => import("../../../ambel/ambel/src/components/Homepage")
);

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/homepage",
    element: (
      <React.Suspense fallback={<div>Loading Homepage...</div>}>
        <PricingPage />
      </React.Suspense>
    ),
  },
]);
