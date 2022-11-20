import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { AiFillBank } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { FaWallet, FaPercentage } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home_page" style={{ marginTop: 150 }}>
        <div className="home_header">
          <h1>Hi Newton</h1>
        </div>
        <hr style={{ marginBottom: 20 }} />
        <div className="card_wrapper">
          <div className="card">
            <p>Total Balance</p>
            <h4>₦450,000</h4>
          </div>
          <div className="card">
            <p>Savings Balance</p>
            <h4>₦175,000</h4>
          </div>
        </div>
        <div className="action_wrapper">
          <Link to="fund-wallet">
            <div className="action_box">
              <div className="action">
                <FaWallet fontSize={24} />
              </div>
              <p>Fund Wallet</p>
            </div>
          </Link>
          <div className="action_box">
            <div className="action">
              <IoIosSend fontSize={24} />
            </div>
            <p>Transfer</p>
          </div>
          <div className="action_box">
            <div className="action">
              <AiFillBank fontSize={24} />
            </div>
            <p>Withdraw</p>
          </div>
          <Link to="set-percentage">
            <div className="action_box">
              <div className="action">
                <FaPercentage fontSize={24} />
              </div>
              <p>Set Percentage</p>
            </div>
          </Link>
        </div>
        <div className="recent_wrapper">
          <h2>Recent Transactions</h2>
          <div className="tranx_wrapper">
            <div className="tranx_box">
              <div className="cash_wrapper">
                <BsCash color="#104e10" fontSize={14} />
              </div>
              <p>Transfer from John to Newton</p>
              <div className="amount_date">
                <p>₦45,000</p>
                <h6>Jan 23, 2022</h6>
              </div>
            </div>
            <div className="tranx_box">
              <div className="cash_wrapper">
                <BsCash color="#104e10" fontSize={14} />
              </div>
              <p>Transfer from John to Newton</p>
              <div className="amount_date">
                <p>₦15,000</p>
                <h6>Jan 15, 2022</h6>
              </div>
            </div>
            <div className="tranx_box">
              <div className="cash_wrapper red">
                <BsCash color="#ff2d55" fontSize={14} />
              </div>
              <p>Withdrawal Made from account</p>
              <div className="amount_date">
                <p>₦17,000</p>
                <h6>Dec 30, 2021</h6>
              </div>
            </div>
            <div className="tranx_box">
              <div className="cash_wrapper">
                <BsCash color="#104e10" fontSize={14} />
              </div>
              <p>Transfer from John to Newton</p>
              <div className="amount_date">
                <p>₦45,000</p>
                <h6>Jan 23, 2022</h6>
              </div>
            </div>
            <div className="tranx_box">
              <div className="cash_wrapper red">
                <BsCash color="#ff2d55" fontSize={14} />
              </div>
              <p>Withdrawal Made from account</p>
              <div className="amount_date">
                <p>₦17,000</p>
                <h6>Dec 30, 2021</h6>
              </div>
            </div>
            <div className="tranx_box">
              <div className="cash_wrapper">
                <BsCash color="#104e10" fontSize={14} />
              </div>
              <p>Transfer from John to Newton</p>
              <div className="amount_date">
                <p>₦15,000</p>
                <h6>Jan 15, 2022</h6>
              </div>
            </div>
            <div className="tranx_box">
              <div className="cash_wrapper red">
                <BsCash color="#ff2d55" fontSize={14} />
              </div>
              <p>Withdrawal Made from account</p>
              <div className="amount_date">
                <p>₦17,000</p>
                <h6>Dec 30, 2021</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar activeNav="home" />
    </>
  );
};

export default Home;
