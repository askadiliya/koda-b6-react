import React from 'react';

const Line = ({ children }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <hr className="grow border-t border-gray-300" /> 
      
      <span className="text-gray-500 text-sm font-medium">
        {children}
      </span>
      
      <hr className="grow border-t border-gray-300" />
    </div>
  );
};

export default Line;
