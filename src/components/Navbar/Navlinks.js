import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HomeSvg from "../Svg/HomeSvg";
import DealSvg from "../Svg/DealSvg";
import WalletSvg from "../Svg/WalletSvg";
import MoreSvg from "../Svg/MoreSvg";

const Navlinks = ({ activeNav }) => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    setActive(activeNav);
  }, [activeNav]);

  return (
    <ul className="menu-items">
      <li className={`menu-item ${active === "home" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "home" && "active"}`}
          to="/home"
        >
          <HomeSvg
            className="menu-icon"
            fill={`${active === "home" ? "#227EFF" : "none"}`}
          />
          <p>Home</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "savings" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "savings" && "active"}`}
          to="/savings"
        >
          <WalletSvg
            className="menu-icon"
            fill={`${active === "savings" ? "#227EFF" : "none"}`}
          />
          <p>Savings</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "tranx" && "active"}`}>
        <Link
          className={`menu-item-link ${active === "tranx" && "active"}`}
          to="/transactions"
        >
          <DealSvg
            className="menu-icon"
            fill={`${active === "tranx" ? "#227EFF" : "none"}`}
          />
          <p>Transactions</p>
        </Link>
      </li>
      <li className={`menu-item ${active === "profile" && "active"}`}>
        <Link
          className={`menu-item-link profile ${
            active === "profile" && "active"
          }`}
          to="/profile"
        >
          <MoreSvg
            className="menu-icon"
            fill={`${active === "profile" ? "#227EFF" : "#718596"}`}
          />
          <p>Profile</p>
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
