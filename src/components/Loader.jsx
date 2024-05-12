import React from "react";

const Loader = () => {
  return (
    <div className="flex animate-spin justify-center pt-10 relative">
      <div className="w-32 h-32 rounded-full border-l-green-500 border-4 mt-5"></div>
    </div>
  );
};

export default Loader;
