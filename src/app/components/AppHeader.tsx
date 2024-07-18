"use client";
import React, { useEffect, useState } from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Divider, Drawer, Flex } from "antd";
import Image from "next/image";
import Logo from "../../../public/crewin-logo.svg";
import { Icon } from "@iconify/react";

const AppHeader = () => {
  const items = [
    {
      label: "Homepage",
      key: "home",
    },
    {
      label: "About",
      key: "about",
    },
    {
      label: "Contact",
      key: "contact",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isScrolled]);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Header
      className={`w-full bg-background max-w-[1920px] mx-auto sticky top-0 z-10 transition-all duration-700 ${isScrolled && "shadow-md "} `}
    >
      <Flex gap="middle" wrap justify="space-between" className="h-full">
        <div className="py-2">
          <Image src={Logo} className="md:w-[80%] w-[70%] h-full" alt="logo" />
        </div>
        <Flex
          gap="middle"
          wrap
          justify="space-evenly"
          align="center"
          className="hidden md:flex"
        >
          <Flex gap="middle" wrap justify="space-evenly">
            {items.map((item) => (
              <Button key={item.key} type="text" size="middle">
                {item.label}
              </Button>
            ))}
          </Flex>
          <Divider
            style={{ opacity: 1, backgroundColor: "#C0C0C0", height: "40%" }}
            type="vertical"
            orientation="center"
          ></Divider>
          <Icon className="cursor-pointer" icon="flag:us-4x3" width={30} />
          <Divider
            style={{ opacity: 1, backgroundColor: "#C0C0C0", height: "40%" }}
            type="vertical"
            orientation="center"
          ></Divider>
          <Button type="primary" size="middle">
            Login
          </Button>
        </Flex>
        <div className="md:hidden">
          <Button
            type="primary"
            onClick={showDrawer}
            className="rounded-full"
            icon={<Icon icon="ph:list" width={20} color="white" />}
          ></Button>
          <Drawer onClose={onClose} open={open} className="relative">
            <Flex
              vertical
              className="md:hidden  h-full w-2/3 mx-auto"
              justify="center"
            >
              {items.map((item) => (
                <Button key={item.key} type="text" size="large">
                  {item.label}
                </Button>
              ))}
              <Divider />
              <Button className="" type="primary" size="middle">
                Login
              </Button>
              <Divider />
              <div className="mx-auto w-full left-0 bottom-10 absolute flex justify-center">
                <Icon
                  className="cursor-pointer"
                  icon="flag:us-4x3"
                  width={30}
                />
              </div>
            </Flex>
          </Drawer>
        </div>
      </Flex>
    </Header>
  );
};

export default AppHeader;
