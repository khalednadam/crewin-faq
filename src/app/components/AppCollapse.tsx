"use client";

import React, { useState } from "react";
import CollapseItem from "./CollapseItem";
import { Collapse, CollapseProps, Tabs, TabsProps } from "antd";

const AppCollapse = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const questions = [
    {
      category: "Seafarer",
      question: "Is there a registration or subscription fee?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "ph:user",
    },
    {
      category: "Seafarer",
      question: "Are there any conditions for applying?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "ph:user",
    },
    {
      category: "Company",
      question:
        "Do I need to spend a packet again for a seafarer I have imaged?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "hugeicons:building-03",
    },
    {
      category: "Seafarer",
      question: "How do companies contact me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "ph:user",
    },
    {
      category: "Cadet",
      question: "Can I see the reference grades of my instructors? ",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "hugeicons:mortarboard-02",
    },
    {
      category: "Company",
      question: "Is there a charge for detailed filtering? ",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptate cumque earum sapiente et officia provident, ullam commodi omnis sit, illo placeat nostrum obcaecati repellendus? Facilis aliquid architecto adipisci in?",
      icon: "hugeicons:building-03",
    },
  ];

  const categories = ["All", "Seafarer", "Company", "Cadet"];

  const onChange = (key: string) => {
    setSelectedCategory(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "All",
      label: "All",
    },
    {
      key: "Seafarer",
      label: "Seafarer",
    },
    {
      key: "Company",
      label: "Company",
    },
    {
      key: "Cadet",
      label: "Cadet",
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
              selectedCategory === "All"
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
