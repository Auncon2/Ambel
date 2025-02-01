import BookADemo from "./BookADemo/BookADemo";
import { CustomerFeedBack } from "./CustomerFeedBack/CustomerFeedBack";
import { Features } from "./Features/Features";
import FindAndBook from "./FindAndBook/FindAndBook";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import { OverView } from "./OverView/OverView";
import PopularPractitioners from "./PopularPractitioners/PopularPractitioners";
import { SocialProofSection } from "./SocialProofSection/SocialProofSection";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <section className="w-full flex justify-center mt-[70px]">
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
    </div>
  );
};

export default Homepage;
