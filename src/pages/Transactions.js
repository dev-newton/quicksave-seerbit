import React from "react";
import Navbar from "../components/Navbar/Navbar";

import { BsCash } from "react-icons/bs";

const Transactions = () => {
  return (
    <>
      =
      <div className="home_page" style={{ marginTop: 130 }}>
        <div className="home_header">
          <h1>My Transactions</h1>
        </div>
        <hr style={{ marginBottom: 20 }} />
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
      <Navbar activeNav="tranx" />
    </>
  );
};

export default Transactions;
