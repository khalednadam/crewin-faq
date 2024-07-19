"use client";

import React, { useState } from "react";
import CollapseItem from "./CollapseItem";
import { Tabs, TabsProps } from "antd";
import { useTranslations } from "next-intl";

const AppCollapse = () => {
  const t = useTranslations("questions");
  const [selectedCategory, setSelectedCategory] = useState(t("all"));
  const questions = [
    {
      category: t("seafarer"),
      question: t("registration_fee"),
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "ph:user",
    },
    {
      category: t("seafarer"),
      question: t("conditions"),
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "ph:user",
    },
    {
      category: t("company"),
      question: t("spend_packet"),
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "hugeicons:building-03",
    },
    {
      category: t("seafarer"),
      question: t("companies_contact"),
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "ph:user",
    },
    {
      category: t("cadet"),
      question: t("grades"),
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "hugeicons:mortarboard-02",
    },
    {
      category: t("company"),
      question: t("filter_charge"),
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "hugeicons:building-03",
    },
  ];

  const onChange = (key: string) => {
    setSelectedCategory(key);
  };

  const items: TabsProps["items"] = [
    {
      key: t("all"),
      label: t("all"),
    },
    {
      key: t("seafarer"),
      label: t("seafarer"),
    },
    {
      key: t("company"),
      label: t("company"),
    },
    {
      key: t("cadet"),
      label: t("cadet"),
    },
  ];
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center ">
        <Tabs
          className="md:w-2/3"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div>
      <div>
        {questions
          .filter(
            (question) =>
              question.category === selectedCategory ||
              selectedCategory === t("all")
          )
          .map((question) => (
            <CollapseItem
              key={question.question}
              answer={question.answer}
              category={question.category}
              question={question.question}
              icon={question.icon}
            />
          ))}
      </div>
    </div>
  );
};

export default AppCollapse;
