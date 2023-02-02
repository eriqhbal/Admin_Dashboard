import React from 'react';

const Button = ({color, text, bgColor, borderRadius, size, currentFunction, bgHoverColor}) => {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} `}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      onClick={currentFunction}
    >
      <span className="brightness-200 text-black dark:text-white">{text}</span>
    </button>
  );
}

export default Button