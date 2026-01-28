import React from "react";

function Input(props) {
  const { type, name, label, id, value, placeholder, onChange, icon } =props

  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <label className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 mt-1">
        <span>{icon}</span>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 border-none outline-none"
        />
      </label>
    </div>
  );
}

export default Input
