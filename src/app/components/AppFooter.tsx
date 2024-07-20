import React from "react";
import Logo from "../../../public/crewin-logo.svg";
import Image from "next/image";
import { Button, Divider } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";

const AppFooter = () => {
  const t = useTranslations("footer");
  const socials = [
    {
      icon: "jam:twitter",
      link: "https://x.com",
    },
    {
      icon: "jam:facebook",
      link: "https://facebook.com",
    },
    {
      icon: "jam:instagram",
      link: "https://instagram.com",
    },
    {
      icon: "jam:linkedin",
      link: "https://linkedin.com",
    },
  ];

  const menu = [
    {
      title: t("company"),
      children: [
        {
          label: t("terms-of-service"),
          link: "/terms-of-service",
        },
        {
          label: t("privacy-policy"),
          link: "/privacy-policy",
        },
        {
          label: t("faq"),
          link: "/faq",
        },
        {
          label: t("about"),
          link: "/about",
        },
        {
          label: t("contact"),
          link: "/contact",
        },
      ],
    },
    {
      title: t("platform"),
      children: [
        {
          label: t("pricing-table"),
          link: "/pricing-table",
        },
        {
          label: t("seafarer"),
          link: "/seafarer",
        },
        {
          label: t("company"),
          link: "/company",
        },
        {
          label: t("career"),
          link: "/career",
        },
        {
          label: t("mobile-apps"),
          link: "/mobile-apps",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col md:justify-between md:items-center">
        <div className="flex md:flex-row flex-col items-start justify-start gap-y-10 md:space-x-20">
          {menu.map((item) => (
            <div key={item.title} className="h-full ">
              <h6 className="font-bold text-md">{item.title}</h6>
              <ul className="flex flex-col space-y-3 pt-4 ">
                {item.children.map((child) => (
                  <li
                    key={child.link}
                    className="opacity-60 text-sm cursor-pointer"
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start my-10 md:items-end space-y-4 ">
          <Image
            src={Logo}
            style={{
              height: 30,
              width: "auto",
            }}
            alt="logo"
          />
          <p className="md:text-end opacity-50 text-xs md:w-2/3">
            {t("company-slag")}
          </p>
          <Button type="primary">{t("login")}</Button>
        </div>
      </div>
      <Divider type="horizontal" />
      <div className="flex md:flex-row flex-col  md:justify-between  items-center w-full">
        <p>
          &copy;
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
        <div className="flex space-x-5">
          {socials.map((social) => (
            <Icon
              key={social.link}
              icon={social.icon}
              width={20}
              opacity={0.3}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
