import { createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";

// const PricingPage = React.lazy(
//   () => import("../../../pricing/pricing/src/components/TestOne")
// );

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  //   {
  //     path: "/pricing",
  //     element: (
  //       <React.Suspense fallback={<div>Loading Pricing...</div>}>
  //         <PricingPage />
  //       </React.Suspense>
  //     ),
  //   },
]);
