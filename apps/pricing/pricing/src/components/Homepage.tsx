import { Features } from "./Features/Features";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <section className="w-full flex justify-center mt-[120px] ">
        <div className="w-full flex flex-col">
          <div className=" flex flex-col mx-auto max-w-[1366px]"></div>

          <div className=" flex flex-col mx-auto max-w-[1366px]"></div>

          <Features />
          <div className="flex flex-col mx-auto max-w-[1366px]"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
