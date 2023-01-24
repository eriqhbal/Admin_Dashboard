import React from 'react';

const Button = ({color, text, bgColor, borderRadius, size}) => {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
    >
      <span className="text-[#FFD4D4] brightness-200">{text}</span>
    </button>
  );
}

export default Button