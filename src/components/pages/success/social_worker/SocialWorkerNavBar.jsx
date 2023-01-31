import React from "react";

const SocialWorkerNavBar = () => {
  return (
    <nav className="nav_sw w-100 bg-zinc-900 flex justify-around h-12 text-purple-100 fixed top-0">
      <div className="flex items-center">CFP</div>
      <ul className="flex list-none justify-between w-2/5 h-full items-center">
        <li className=" hover:bg-zinc-900 hover:text-yellow-100 h-full flex items-center px-7">
          Upload Data
        </li>
        <li className=" hover:bg-zinc-900 hover:text-yellow-100 h-full flex items-center px-7">
          Review Statistics
        </li>
        <li className=" hover:bg-zinc-900 hover:text-yellow-100 h-full flex items-center px-7">
          Notifications
        </li>
      </ul>
    </nav>
  );
};

export default SocialWorkerNavBar;
