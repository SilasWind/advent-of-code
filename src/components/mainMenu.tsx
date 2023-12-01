import React from "react";
import { Link } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <ul>
        <li>
          <Link to="/day1">Day 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
