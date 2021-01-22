import React from "react";

const Card = () => {
  return (
    <>
      <div className="shadow-lg p-4 rounded-2xl mt-6">
        <div className="text-2xl font-bold font-sans text-gray-500 mb-2">
          Title
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          reprehenderit dignissimos voluptate mollitia impedit ab quod suscipit,
          deleniti molestias, natus eius libero fuga quae beatae dicta neque
          iure commodi cum.
        </div>
      </div>

      <div className="relative mt-6">
        <div className="absolute bg-red-600 w-2 rounded-tl-lg rounded-bl-lg h-full"></div>
        <div className="shadow-lg p-4 rounded-tr-2xl rounded-br-2xl pl-5">
          <div className="text-2xl font-bold font-sans text-gray-500 mb-2">
            Title
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit dignissimos voluptate mollitia impedit ab quod
            suscipit, deleniti molestias, natus eius libero fuga quae beatae
            dicta neque iure commodi cum.
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="absolute bg-blue-600 w-2 rounded-tl-lg rounded-bl-lg h-full"></div>
        <div className="shadow-lg p-4 rounded-tr-2xl rounded-br-2xl">
          <div className="text-2xl font-bold font-sans text-gray-500 mb-2">
            Title
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit dignissimos voluptate mollitia impedit ab quod
            suscipit, deleniti molestias, natus eius libero fuga quae beatae
            dicta neque iure commodi cum.
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
