import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="pb-[100px] relative flex flex-col items-center justify-center gap-7 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/herosection/Background line.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}

      <h1
        aria-label="Looking for a Business Solution for appointments?"
        className="text-center text-5xl font-bold mb-6 leading-snug"
      >
        Looking for a <span className="gradient-text">Business Solution</span>
        <br />
        <div className="flex items-center justify-center gap-2">
          <span className="gradient-text r">for</span>
          <span>appointments?</span>
        </div>
      </h1>

      {/* Subtext */}
      <p className="text-center mb-8 text-primary lg:max-w-[1100px]">
        Ambel simplifies business management by providing tools for scheduling
        appointments, managing bookkeeping, accepting payments, sharing
        resources with customers, sending reminders, and running email marketing
        campaigns.
      </p>

      {/* Buttons */}
      <div className="relative flex flex-col items-center justify-center gap-7">
        <div className="flex items-start justify-center gap-7">
        <Link to={"/pricing"}>
          <button className="w-[160px] h-[40px] rounded-lg hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out text-white bg-[#19525a]">
            Start A Free Trial
          </button>
          </Link>
          <Link to={"/pricing"}>
          <button className="w-[210px] h-[40px] rounded-lg hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out text-white bg-[#F87316] flex items-center justify-center gap-2">
            <img
              src="/herosection/Search White.png"
              alt="Search"
              className="w-6 h-6"
            />
            <a href="/professionals">Find Professionals</a>
          </button>
          </Link>
        </div>

        {/* Decorative SVG */}
        <div className="absolute top-4 -left-[45px]">
          <img
            src="/herosection/Point to trail.png"
            alt="hero"
            className="w-12 h-auto"
          />
        </div>

        {/* Additional Information */}
        <div className="flex items-start justify-center gap-7 text-xs">
          <div className="flex items-center justify-center gap-[6px] bg-[#ECFDF3] rounded-full py-1 px-[6px] transition-all duration-300 ease-in-out animate-fadeLoop">
            <img
              src="/herosection/Sucess.png"
              alt="Success"
              className="w-[14px] h-[14px]"
            />
            No credit card required
          </div>
          <div className="flex items-center justify-center gap-[6px] bg-[#ECFDF3] rounded-full py-1 px-[6px] transition-all duration-300 ease-in-out animate-fadeLoop">
            <img
              src="/herosection/Sucess.png"
              alt="Success"
              className="w-[14px] h-[14px]"
            />
            Try one month for free
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
