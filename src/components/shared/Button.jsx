import React from "react";

export const Button = () => {
  return (
    <>
      <div className="bg-blue-300 p-2 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-500  transform hover:scale-110 m-2 transition-all duration-500">
        Button 1
      </div>

      <div className="border border-blue-300 p-2 rounded-full text-blue-300 font-bold hover:border-blue-500 hover:text-blue-500 transform hover:scale-110 m-2 transition-all duration-500">
        Button 2
      </div>
    </>
  );
};
