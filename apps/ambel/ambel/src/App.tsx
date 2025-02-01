// import "./App.css";

// import Footer from "./components/Footer/Footer";

// import Navbar from "./components/Navbar/Navbar";

// import BookADemo from "./components/BookADemo/BookADemo";
// import { CustomerFeedBack } from "./components/CustomerFeedBack/CustomerFeedBack";
// import { Features } from "./components/Features/Features";
// import FindAndBook from "./components/FindAndBook/FindAndBook";
// import HeroSection from "./components/HeroSection/HeroSection";
// import { OverView } from "./components/OverView/OverView";
// import PopularPractitioners from "./components/PopularPractitioners/PopularPractitioners";
// import { SocialProofSection } from "./components/SocialProofSection/SocialProofSection";

// function App() {
//   return (
//     <main className="w-full min-h-screen">
//       <Navbar />
//       <section className="w-full flex justify-center mt-[70px] ">
//         <div className="w-full flex flex-col">
//           <div className=" flex flex-col mx-auto max-w-[1366px]">
//             <HeroSection />
//             <OverView />
//             <SocialProofSection />
//             <PopularPractitioners />
//           </div>

//           <Features />
//           <div className="flex flex-col mx-auto max-w-[1366px]">
//             <FindAndBook />
//             <BookADemo />
//             <CustomerFeedBack />
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";

import { routers } from "./router";

function App() {
  return (
    // <div className="w-full min-h-screen">
    //   <Navbar />
    //   <section className="w-full flex justify-center mt-[70px]">
    //     <div className="w-full flex flex-col">
         
    //     </div>
    //   </section>
    //   <Footer />
    // </div>
    <> <RouterProvider router={routers} /></>
  );
}

export default App;
