// src/components/ui/Card.jsx
import React from "react";

const Card = ({
  children,
  variant = "default", // default | elevated | bordered | outlined | soft | hero
  className = "",
  hover = true,
  padding = "normal", // normal | large | small | none
  ...props
}) => {
  const baseClasses = "rounded-2xl overflow-hidden transition-all duration-500 ease-out";

  const variants = {
    default: "bg-[var(--white)] shadow-lg border border-[var(--light-gray)]",
    elevated: "bg-[var(--white)] shadow-2xl border border-[var(--light-gray)]",
    bordered: "bg-[var(--white)] border-2 border-[var(--primary)]/30 shadow-lg",
    outlined: "bg-transparent border-2 border-[var(--primary)]/40 backdrop-blur-md shadow-md",
    soft: "bg-[var(--primary-light)]/60 backdrop-blur-sm border border-[var(--primary)]/20 shadow-inner",
    hero: "bg-gradient-to-br from-[var(--primary)]/10 via-[var(--white)] to-[var(--secondary)]/10 shadow-xl border border-[var(--primary)]/20",
  };

  const hoverClasses = hover
    ? "hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:-translate-y-2 hover:border-[var(--primary)]/40"
    : "";

  const paddingClasses = {
    none: "",
    small: "p-4",
    normal: "p-6",
    large: "p-8 md:p-10",
  };

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Premium Sub-components
Card.Header = ({ children, className = "", accent = true }) => (
  <div
    className={`px-6 py-5 border-b border-[var(--light-gray)] ${
      accent ? "bg-gradient-to-r from-[var(--primary)]/5 to-transparent" : "bg-[var(--bg)]"
    } ${className}`}
  >
    {children}
  </div>
);

Card.Body = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-t border-[var(--light-gray)] bg-[var(--bg)]/50 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = "" }) => (
  <h3 className={`text-2xl font-bold text-[var(--text-dark)] ${className}`}>
    {children}
  </h3>
);

Card.Description = ({ children, className = "" }) => (
  <p className={`text-[var(--text-muted)] leading-relaxed ${className}`}>
    {children}
  </p>
);

export default Card;