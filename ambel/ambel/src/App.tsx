import "./App.css";
import BookADemo from "./components/BookADemo/BookADemo";
import { CustomerFeedBack } from "./components/CustomerFeedBack/CustomerFeedBack";
import { Features } from "./components/Features/Features";
import FindAndBook from "./components/FindAndBook/FindAndBook";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";

import Navbar from "./components/Navbar/Navbar";
import { OverView } from "./components/OverView/OverView";
import PopularPractitioners from "./components/PopularPractitioners/PopularPractitioners";
import { SocialProofSection } from "./components/SocialProofSection/SocialProofSection";

function App() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <section className=" flex justify-center mt-[70px] ">
        <div className="flex flex-col">
          <div className="flex flex-col mx-auto max-w-[1366px]">
            <HeroSection />
            <OverView />
            <SocialProofSection />
            <PopularPractitioners />
          </div>

          <Features />
          <div className="flex flex-col mx-auto max-w-[1366px]">
            <FindAndBook />
            <BookADemo />
            <CustomerFeedBack />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
