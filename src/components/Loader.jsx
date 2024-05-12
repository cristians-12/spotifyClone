import React from "react";

const Loader = () => {
  return (
    <div className="flex animate-spin justify-center">
      <div className="w-32 h-32 rounded-full border-l-green-500 border-4"></div>
    </div>
  );
};

export default Loader;
