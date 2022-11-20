import React from "react";
import Navbar from "../components/Navbar/Navbar";

import { BsCash } from "react-icons/bs";

const Savings = () => {
  return (
    <>
      <div className="home_page" style={{ marginTop: 150 }}>
        <div className="home_header">
          <h1>My Savings</h1>
        </div>
        <hr style={{ marginBottom: 20 }} />
        <div className="tranx_wrapper">
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦45,000</p>
              <h6>Jan 23, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦15,000</p>
              <h6>Jan 15, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper ">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN 15,000 for School Fees</p>
            <div className="amount_date">
              <p>₦17,000</p>
              <h6>Dec 30, 2021</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦45,000</p>
              <h6>Jan 23, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper ">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN 15,000 for School Fees</p>
            <div className="amount_date">
              <p>₦17,000</p>
              <h6>Dec 30, 2021</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦15,000</p>
              <h6>Jan 15, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper ">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN 15,000 for School Fees</p>
            <div className="amount_date">
              <p>₦17,000</p>
              <h6>Dec 30, 2021</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦45,000</p>
              <h6>Jan 23, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦15,000</p>
              <h6>Jan 15, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper ">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN 15,000 for School Fees</p>
            <div className="amount_date">
              <p>₦17,000</p>
              <h6>Dec 30, 2021</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦45,000</p>
              <h6>Jan 23, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper ">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN 15,000 for School Fees</p>
            <div className="amount_date">
              <p>₦17,000</p>
              <h6>Dec 30, 2021</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN10,000 for House rent</p>
            <div className="amount_date">
              <p>₦15,000</p>
              <h6>Jan 15, 2022</h6>
            </div>
          </div>
          <div className="tranx_box">
            <div className="cash_wrapper ">
              <BsCash color="#104e10" fontSize={14} />
            </div>
            <p>You saved NGN 15,000 for School Fees</p>
            <div className="amount_date">
              <p>₦17,000</p>
              <h6>Dec 30, 2021</h6>
            </div>
          </div>
        </div>
      </div>
      <Navbar activeNav="savings" />
    </>
  );
};

export default Savings;
