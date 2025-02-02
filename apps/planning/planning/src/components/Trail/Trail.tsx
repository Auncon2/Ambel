const Trail = () => {
  return (
<div className="max-w-full flex justify-center items-center">
  <div className="mx-auto w-[1130px] flex justify-between bg-[#f5fffd] p-14 rounded-lg my-14">
    {/* Text Container */}
    <div className="flex-1 flex flex-col gap-4 text-start">
      <h1 className="text-3xl font-semibold text-green-800">
        Start your 30-day free trial
      </h1>
      <p className="text-green-700">
        Join over 100+ practitioners and organizations already growing with
        Ambel.
      </p>
    </div>

    {/* Buttons Container */}
    <div className="flex gap-3 mt-6 items-center">
      <button className="bg-white text-black w-[128px] h-[48px] font-bold rounded-lg shadow-md flex justify-center items-center">
        Learn More
      </button>

      <button className="bg-[#19525a] text-white w-[128px] h-[48px] font-bold rounded-lg shadow-md flex justify-center items-center">
        Get Started
      </button>
    </div>
  </div>
</div>

  );
};

export default Trail;
