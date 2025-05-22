import React from 'react';

const LoaderDot = () => {
  return (
    <div className="flex flex-row gap-1">
      <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce" />
      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-bounce [animation-delay:-.3s]" />
      <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce [animation-delay:-.3s]" />
    </div>
  );
}

export default LoaderDot;
