

const BookADemo = () => {
  return (
    <section
      className="bg-[#19525a] py-16 text-white_ my-24"
      style={{
        // backgroundImage: "url('/homePage/BG_discover.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto px-4 text-center md:w-3/4">
        <h1 className="text-4xl font-bold mb-4">
          See it to Believe It – Join the Transformation Today
        </h1>
        <p className="text-lg mb-8">
          Experience the transformation that makes business easier and more efficient. Discover firsthand how our platform can drive real results for you.
        </p>
        <div className="flex justify-center gap-5">
          <button className="bg-[#E1F9C9] text-black_ py-2 px-4 rounded-full font-semibold text-lg">
            Book a Demo
          </button>
          <button className="bg-white_ text-black_ py-2 px-4 rounded-full font-semibold text-lg">
            Get it Free
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookADemo