import React, { ButtonHTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  width?: "content" | "fill";
  children: string | React.ReactElement;
}

// const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
//   className,
//   children,
// }) => {
//     //TODO: figure out how to get other button attributes
//   return <button className={className ?? s.default}>{children}</button>;
// };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", width = "content", children, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${s.button} ${s[`variant-${variant}`]} width-${
          s[`width-${width}`]
        } ${className ?? ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
