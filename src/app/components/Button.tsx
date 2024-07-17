import { cva } from "class-variance-authority";
import React from "react";

const Button = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <button>{children}</button>;
};

export default Button;
