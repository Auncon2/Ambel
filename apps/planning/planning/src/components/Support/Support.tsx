const Support = () => {
  const items = [
    { id: 1, text: "Is there a free trial available?",text2:"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.", 
        imageSrc: "/support/Featured icon (5).png" },
    { id: 2, text: "Can I change my plan later?",text2:"Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan. ", 
        imageSrc: "/support/Featured icon.png" },
    { id: 3, text: "May I need to pay full amount while I update plan in the middle of the month?",text2:"No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.", 
        imageSrc: "/support/Featured icon (1).png" },
    { id: 4, text: "Can I disable the auto renew?",text2:"You can disable and enable auto renew anytime also you can choose auto renew from different options.", 
        imageSrc: "/support/Featured icon (2).png" },
    { id: 5, text: "What is your cancellation policy?",text2:"We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.", 
        imageSrc: "/support/Featured icon (3).png" },
    { id: 6, text: "Can I run my business Pay As You Go for lifetime",text2:"Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan.", 
        imageSrc: "/support/Featured icon (4).png" },
  ];

  return (
    <div className="max-w-full mx-auto flex justify-center items-center">
        <div className="mx-auto max-w-[1130px] flex flex-col justify-center my-20">
      {/* 1st part */}

        <div className="flex flex-col gap-3 text-start">
          <span className="text-[15px] text-green-800 font-semibold">Support</span>
          <span className="text-3xl font-bold">Frequently asked questions</span>
          <span className="text-gray-600">
            Everything you need to know about the product and billing. Can’t
            find the <br/> answer you’re looking for? Please <span className="underline"> chat to our friendly
            team.</span>
          </span>
        </div>
     
      {/* 2nd part  */}
      <div className="flex justify-around items-center gap-20 mt-20">
        <div className="flex flex-col gap-12">
     
          {items.map((item) => (
            <div key={item.id} className="flex gap-2">
              <img
                alt="hero"
                src={item.imageSrc}
                className="w-[48px] h-[48px] object-contain"
              />
              <div className="flex flex-col gap-1">
                <span className="text-base font-bold">{item.text}</span>
                <span className="text-sm text-slate-600">{item.text2}</span>
              </div>
            </div>
          ))}
        </div>

        <img
          alt="hero"
          src="/support/Image.png"
          className="w-[560px] h-[560px] object-contain rounded-md"
        />
      </div>
      </div>
    </div>
  );
};

export default Support;
