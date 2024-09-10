import React from "react";
import Image from "next/image";
import Faq from "../../../public/faq.svg";
import AppCollapse from "@/app/components/AppCollapse";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("faq");
  return (
    <div className="bg-background px-5">
      <div className="flex justify-center mt-14 flex-col">
        <Image
          src={Faq}
          alt="faq"
          style={{ width: "auto", height: 170 }}
          className="mt-10"
        />
        <h2 className="text-center text-3xl mt-14 font-bold">{t("faq")}</h2>
        <p className="text-center  md:w-2/3 w-full mx-auto opacity-60 mt-5">
          {t("intro")}
        </p>
        <div className="my-14">
          <AppCollapse />
        </div>
      </div>
    </div>
  );
};

export default Home;
