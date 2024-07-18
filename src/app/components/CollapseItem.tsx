"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CollapseItemProps {
  question: string;
  icon: string;
  category: string;
  answer: string;
}

const boxVariants = {
  closed: { height: "0px", y: -10, opacity: 0 },
  open: { height: "", opacity: 1, y: 0 },
};

const textVariants = {
  closed: { opacity: 0, display: "none" },
  open: { opacity: 1, display: "block" },
};

const CollapseItem = ({
  question,
  icon,
  category,
  answer,
}: CollapseItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-2 my-10 rounded-lg border-[#E6E6E6] flex flex-col md:w-2/3 mx-auto items-center justify-between transition-all duration-700">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <div className="bg-[#134E70] rounded-lg m-3">
            <Icon icon={icon} width={30} className="m-4" color="white" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs opacity-60">{category}</p>
            <p className="md:text-xl">{question}</p>
          </div>
        </div>
        <div>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full m-2 md:!w-12 md:!h-12 !w-8 !h-8 bg-background"
            icon={
              <Icon
                icon={
                  isOpen ? "hugeicons:arrow-up-01" : "hugeicons:arrow-down-01"
                }
                width={30}
                className="m-4 "
              />
            }
          ></Button>
        </div>
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={boxVariants}
        transition={{ duration: 0.1 }}
      >
        <div className={`px-4 py-3 min-h-[50px]`}>
          <motion.p
            transition={{ duration: 0.8 }}
            variants={textVariants}
            animate={isOpen ? "open" : "closed"}
            className={`opacity-60 transition-all duration-700`}
          >
            {answer}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default CollapseItem;
