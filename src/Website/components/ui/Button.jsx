// src/components/ui/Button.jsx
import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",   
  size = "md",         
  loading = false,
  disabled = false,
  to,
  href,
  className = "",
  ...props
}) => {
  const base =
    "btn inline-flex items-center justify-center gap-2 font-semibold select-none";

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    success: "btn-success",
    danger: "btn-danger",
    ghost: "btn-ghost",
  };

  const sizes = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled || loading ? "btn-disabled" : ""}
    ${className}
  `;

  const Spinner = <span className="btn-spinner" />;

  const content = (
    <>
      {loading && Spinner}
      <span>{children}</span>
    </>
  );

  if (to) return <Link to={to} className={classes}>{content}</Link>;
  if (href) return <a href={href} className={classes}>{content}</a>;

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
