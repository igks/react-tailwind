import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="py-5 px-5">
      <ul>
        <li>
          <Link to="card">
            <div className="bg-green-100 w-full p-3 my-1">Card</div>
          </Link>
        </li>
        <li>
          <Link to="button">
            <div className="bg-green-100 w-full p-3 my-1">Button</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
