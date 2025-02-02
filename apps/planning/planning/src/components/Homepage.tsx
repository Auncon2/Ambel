import { Features } from "./Features/Features";

import Footer from "./Footer/Footer";

import Navbar from "./Navbar/Navbar";
import { PricingPlans } from "./PricingPlans/PricingPlans";
import Support from "./Support/Support";
import Trail from "./Trail/Trail";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <section className="w-full flex justify-center ">
        <div className="w-full flex flex-col">
          <PricingPlans />
          {/* <div className="flex flex-col mx-auto max-w-[1366px]"><Trail /></div> */}
          <Trail />
          <Features />
          <Support/>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
