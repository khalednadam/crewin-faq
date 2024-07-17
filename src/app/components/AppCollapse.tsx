"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Collapse, CollapseProps } from "antd";

import React from "react";

const AppCollapse = () => {
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

  return (
    <div className="flex flex-col space-y-5">
      {questions.map((question) => (
        <div
          key={question.question}
          className="border-2 rounded-lg border-[#E6E6E6] flex w-2/3 mx-auto items-center justify-between"
        >
          <div className="flex items-center">
            <div className="bg-[#134E70] rounded-lg m-3">
              <Icon
                icon={question.icon}
                width={30}
                className="m-4"
                color="white"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xs opacity-60">{question.category}</p>
              <p className="text-xl ">{question.question}</p>
            </div>
          </div>
          <div className="flex rounded-full border border-[#E6E6E6] mx-2">
            <Icon icon="hugeicons:arrow-down-01" width={30} className="m-2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppCollapse;
