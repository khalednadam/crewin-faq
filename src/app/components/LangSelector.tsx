"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";

const LangSelector = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    const nextLocale = key;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  const items = [
    {
      key: "en",
      label: (
        <div>
          <Icon className="cursor-pointer" icon="flag:us-4x3" width={30} />
        </div>
      ),
    },
    {
      key: "tr",
      label: (
        <div>
          <Icon className="cursor-pointer" icon="flag:tr-4x3" width={30} />
        </div>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items, onClick }}>
      <a onClick={(e) => e.preventDefault()}>
        <Icon
          className="cursor-pointer"
          icon={locale === "en" ? "flag:us-4x3" : "flag:tr-4x3"}
          width={30}
        />
      </a>
    </Dropdown>
  );
};

export default LangSelector;
