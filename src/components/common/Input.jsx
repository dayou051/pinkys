import { useState } from "react";

export const TypeInput = {
  NORMAL: "text",
  EMAIL: "email",
  TEXTAREA: "textarea",
};

const Input = ({ label, type = TypeInput.NORMAL, placeholder, error = "" }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputClassName = `w-full p-2 border-b-2 focus:outline-none transition-all duration-300 ease-in-out ${
    error || isFocused ? "border-pink-500" : "border-gray-400"
  }`;

  const labelClassName = `text-sm font-semibold text-gray-700 mb-1 transition-all duration-300 ease-in-out ${
    isFocused ? "text-pink-500" : "text-gray-700"
  }`;

  return (
    <div className="flex flex-col w-full items-start">
      <label className={labelClassName}>
        {label}
      </label>
      {type === TypeInput.TEXTAREA ? (
        <textarea
          className={inputClassName}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          type={type}
          className={inputClassName}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
