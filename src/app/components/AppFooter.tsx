import React from "react";
import Logo from "../../../public/crewin-logo.svg";
import Image from "next/image";
import { Button, Divider } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";

const AppFooter = () => {
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
    {
      icon: "",
      link: "",
    },
  ];

  const menu = [
    {
      title: "Company",
      children: [
        {
          label: "Terms of Service",
          link: "/terms-of-service",
        },
        {
          label: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          label: "FAQ",
          link: "/faq",
        },
        {
          label: "About",
          link: "/about",
        },
        {
          label: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      title: "Platform",
      children: [
        {
          label: "Pricing Table",
          link: "/pricing-table",
        },
        {
          label: "Seaferer",
          link: "/seaferer",
        },
        {
          label: "Company",
          link: "/company",
        },
        {
          label: "Career",
          link: "/career",
        },
        {
          label: "Mobile Apps",
          link: "/mobile-apps",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-start justify-start flex-row space-x-20">
          {menu.map((item) => (
            <div key={item.title}>
              <h6 className="font-bold text-md">{item.title}</h6>
              <ul className="flex flex-col space-y-3 pt-4">
                {item.children.map((child) => (
                  <li className="opacity-60 text-sm cursor-pointer">
                    {child.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-end space-y-4">
          <Image
            src={Logo}
            style={{
              height: 30,
              width: "auto",
            }}
            alt="logo"
          />
          <p className="text-end opacity-50 text-xs">
            MARITIME WORKFORCE PLATFORM THAT MEETS <br /> SHEFARERS & SEAFARERS
            WITH SHIPPING COMPANIES
          </p>
          <Button type="primary">Login</Button>
        </div>
      </div>
      <Divider type="horizontal" />
      <div className="flex justify-between items-end w-full">
        <p>
          &copy; copyright {new Date().getFullYear()} by CreWin. All Rights
          Reserved.
        </p>
        <div className="flex space-x-5">
          {socials.map((social) => (
            <Icon
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
