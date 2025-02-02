const Footer = () => {
  const socialLinks = [
    {
      href: "/",
      src: "/footer/Twitter white.png",
      alt: "Twitter",
    },
    {
      href: "/",
      src: "/footer/Linkedin white.png",
      alt: "Linkedin",
    },
    {
      href: "/",
      src: "/footer/FB white.png",
      alt: "Facebook",
    },
    {
      href: "/",
      src: "/footer/Instagram white.png",
      alt: "Instagram",
    },

    {
      href: "/",
      src: "/footer/Youtube white.png",
      alt: "YouTube",
    },
  ];
  const legalLinks = [
    {
      href: "/",
      text: "Terms & Conditions",
    },
    {
      href: "/",
      text: "Cookies",
    },
    {
      href: "/",
      text: "Privacy Policy",
    },
  ];
  return (
    <footer className="max-w-full bg-[#19525A] pt-[32px] flex items-center justify-center">
      <div className="w-[1366px]">
        <div className="w-[92%] md:w-[90%] mx-auto">
          {/* Mobile View - Collapsible Sections */}
          <div className="grid grid-cols-1 md:hidden">
            {["For Customers", "For Practitioners", "Resources", "Company"].map(
              (section, index) => (
                <div
                  key={index}
                  className="col-span-6 md:col-span-1 flex flex-col"
                >
                  <button
                    className="flex justify-between w-full bg-transparent border-none"
                    aria-expanded="false"
                    aria-controls={`drawer-${index + 1}`}
                  >
                    <p className="font-bold mb-4 pb-[4px] text-white">
                      {section}
                    </p>
                    <div>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="inline w-[12px] text-white cursor-pointer"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              )
            )}
          </div>

          {/* Desktop View */}
          <div className="grid-cols-2 md:grid-cols-4 md:gap-10 lg:gap-20 lg:justify-between hidden md:grid">
            {[
              {
                title: "For Customers",
                links: [
                  { name: "Find a Practitioner", href: "/find-practitioner/" },
                  { name: "Book an Appointment", href: "/book-appointment/" },
                  { name: "Make Payment", href: "/payment/" },
                  { name: "Live Consultant", href: "/live-consult/" },
                  { name: "Refund", href: "/refund/" },
                  { name: "Shop", href: "/shop/" },
                  { name: "Resources", href: "/resources/" },
                ],
              },
              {
                title: "For Practitioners",
                links: [
                  { name: "Profile Setup", href: "/profile-setup/" },
                  { name: "Organization Setup", href: "/organization-setup/" },
                  { name: "Collaboration", href: "/collaboration/" },
                  { name: "Withdraw", href: "/withdraw/" },
                  { name: "Pay Staff", href: "/pay-staff/" },
                  { name: "QR Code", href: "/qrcode/" },
                  { name: "Booking Page", href: "/booking-page/" },
                  { name: "Business Tools", href: "/business-tool/" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Plans", href: "/plans/" },
                  { name: "Blog", href: "/blogs/" },
                  { name: "FAQ", href: "/faq/" },
                  { name: "Reviews", href: "/reviews/" },
                  { name: "Refund & Return", href: "/refund-return/" },
                  { name: "Documentation", href: "/documentations/" },
                  { name: "Road Map", href: "/roadmap/" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "/aboutus/" },
                  { name: "Contact Us", href: "/contactus/" },
                  { name: "Career", href: "/career/" },
                  { name: "Privacy Policy", href: "/privacy-policy/" },
                  { name: "Terms & Conditions", href: "/terms/" },
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="col-span-6 mb-10 md:col-span-1 flex flex-col"
              >
                <div className="flex">
                  <p className="font-bold border-b-[2px] mb-4 pb-[4px] border-b-white text-white text-[16px]">
                    {section.title}
                  </p>
                </div>
                <nav className="flex flex-col w-[180px] space-y-4 text-[14px] text-gray-300">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className="inline-block hover:border-l-gray-400 hover:border-l-2 hover:pl-2 hover:text-white transition-all duration-100"
                      href={link.href}
                    >
                      <div className="hover:text-white">{link.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          {/* Link  */}
          <div className="py-[32px] text-white flex flex-col-reverse md:flex-row items-center gap-6">
            <h3>Follow Us</h3>
            <div className="flex items-center gap-6">
              {socialLinks.map(({ href, src, alt }) => (
                <a
                  key={alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:opacity-75 duration-300"
                  href={href}
                >
                  <img
                    src={src}
                    alt={alt}
                    className={`${alt === "YouTube" ? "w-7" : "w-5"} h-5`}
                  />
                </a>
              ))}
            </div>
          </div>
          {/* last section */}
          <div className="md:inline-flex md:justify-between w-full text-white py-[32px] border-t border-white/10 text-sm">
            <div className="w-full flex flex-col-reverse md:flex-row md:justify-between gap-5">
              <p className="mt-2 text-[#FFFFFF] text-center md:text-left">
                Copyright © 2022. Ambel. All rights reserved.
              </p>
              <div className="justify-end mt-2 lg:text-end text-[#FFFFFF]">
                <div className="flex justify-around md:justify-normal md:gap-8">
                  {legalLinks.map(({ href, text }) => (
                    <a key={text} className="hover:opacity-75" href={href}>
                      {text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
