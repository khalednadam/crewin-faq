import React from "react";
import Image from "next/image";
import Faq from "../../public/faq.svg";
import AppCollapse from "./components/AppCollapse";

const Home = () => {
  return (
    <div className="bg-background">
      <div className="flex justify-center mt-14 flex-col">
        <Image src={Faq} alt="faq" style={{ width: "auto", height: 170 }} />
        <h2 className="text-center text-3xl mt-14 font-bold">FAQ</h2>
        <p className="text-center lg:w-2/3 md:w-2/3 w-full mx-auto opacity-60 mt-5">
          Welcome to our FAQ page! Here, you will find answers to the most
          commonly asked questions about our services, products, and policies.
          If you need further assistance, please feel free to contact our
          support team.
        </p>
        <div>
          <AppCollapse />
        </div>
      </div>
    </div>
  );
};

export default Home;
