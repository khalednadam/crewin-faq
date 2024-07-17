import React from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Divider, Flex } from "antd";
import Image from "next/image";
import Logo from "../../../public/crewin-logo.svg";
import { Icon } from "@iconify/react";
const AppHeader = () => {
  const items = [
    {
      label: "Home",
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

  return (
    <Header className="w-full bg-background max-w-[1920px] mx-auto">
      <Flex gap="middle" wrap justify="space-between">
        <div className="py-2">
          <Image
            src={Logo}
            style={{
              height: "80%",
              width: "auto",
            }}
            alt="logo"
          />
        </div>
        <Flex gap="middle" wrap justify="space-evenly" align="center">
          <Flex gap="middle" wrap justify="space-evenly">
            {items.map((item) => (
              <Button type="text" size="middle">
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
      </Flex>
    </Header>
  );
};

export default AppHeader;
