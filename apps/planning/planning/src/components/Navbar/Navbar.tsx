import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    "Features",
    "Plans",
    "Solutions",
    "Resources",
    "Find Professionals",
    "Help",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b py-3 px-6 flex items-center justify-around z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to={"/"}>
          {" "}
          <img
            src="/navbar/ambel copy 2 no pedding 1.png"
            alt="Logo"
            className="h-9 w-[132px]"
          />
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="flex space-x-6 ">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center space-x-1 text-gray-700 font-medium cursor-pointer group"
          >
            <span>{item}</span>
            {item !== "Find Professionals" && (
              <img
                src={"/navbar/Vector 1.png"}
                alt="Arrow"
                className="w-2 h-[6px] transition-transform duration-300 group-hover:rotate-180"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-[#19525a] text-white rounded-lg hover:bg-green-950 transition">
          Sign Up
        </button>
        <Link to="/">
          <button className="px-4 py-2 border-none rounded-lg text-[#19525a] border-blue-600 hover:bg-green-100 transition">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}
