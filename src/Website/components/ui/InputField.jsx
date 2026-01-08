import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const InputField = ({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium mb-1 text-dark">
          {label}
        </label>
      )}

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-kitchen ${error ? "input-error" : ""}`}
        {...props}
      />

      {error && (
        <div className="flex items-center gap-1 mt-1 text-danger text-xs font-medium">
          <FaExclamationCircle size={12} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
