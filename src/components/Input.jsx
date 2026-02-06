import React from "react";

const Input = React.forwardRef(
  ({ type = "text", name, placeholder, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
        className="w-full p-3 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8906]"
      />
    );
  }
);

export default Input;
