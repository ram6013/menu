import React, { forwardRef } from "react";

const Button = forwardRef(({ children, onClick }, ref) => (
  <button
    ref={ref}
    onClick={onClick}
    className="sm:border-2 sm:border-gray-400 md:border-none focus:underline focus:decoration-red-600 focus:outline-none py-3 px-6 text-3xl hover:bg-gray-300"
  >
    {children}
  </button>
));

export default Button;
