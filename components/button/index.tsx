import React, { ButtonHTMLAttributes } from "react";
import s from "./styles.module.css";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
}) => {
    //TODO: figure out how to get other button attributes
  return <button className={className ?? s.default}>{children}</button>;
};

export default Button;
