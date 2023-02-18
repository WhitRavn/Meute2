import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import { DropDownR, DropDownP } from "./DropDown";

export const Navbar = () => {
  const [menuDownR, setMenuDownR] = useState(false);
  const [menuDownP, setMenuDownP] = useState(false);

  return (
    <div>
      <div className="menu">
        <ul className="menu-content">
          {NavItems.map((item) => {
            if (item.id === "2") {
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => setMenuDownR(true)}
                  onMouseLeave={() => setMenuDownR(false)}
                >
                  <Link to={item.path} className={item.class}>
                    {item.title}
                  </Link>
                  {menuDownR && <DropDownR />}
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link to={item.path} className={item.class}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
