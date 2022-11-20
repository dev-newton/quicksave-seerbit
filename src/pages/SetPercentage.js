import React from "react";
import { AiOutlinePercentage } from "react-icons/ai";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const SetPercentage = () => {
  return (
    <>
      <div className="home_page" style={{ marginTop: 150 }}>
        <div className="home_header">
          <h1>Set Percentage</h1>
        </div>
        <hr style={{ marginBottom: 20 }} />
        <div className="form_wrapper">
          <h2>Set a Savings Percentage:</h2>
          <div className="center_percent">
            <input type="text" />
            <AiOutlinePercentage color="#227eff" fontSize={60} />
          </div>

          <Link to="/home">
            <button className="btn">Save</button>
          </Link>
        </div>
      </div>

      <Navbar activeNav="home" />
    </>
  );
};

export default SetPercentage;
