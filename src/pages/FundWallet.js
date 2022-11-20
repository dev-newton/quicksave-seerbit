import { useState } from "react";
import SeerbitCheckout from "seerbit-reactjs";

import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("NGN");
  const [country, setCountry] = useState("NG");
  const [description, setDescription] = useState("");

  const url = window.location.origin + "/home";

  const close = (close) => {
    console.log(close);
  };

  const callback = (response) => {
    console.log(response);
  };

  return (
    <>
      <div className="home_page" style={{ marginTop: 150 }}>
        <div className="home_header">
          <h1>Fund Wallet</h1>
        </div>
        <hr style={{ marginBottom: 20 }} />
        <div className="form_wrapper">
          <div className="form-group">
            <label htmlFor="">Amount:</label>
            <input
              className="input"
              placeholder="Enter an Amount"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Currency:</label>
            <select
              className="input"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="NGN">NGN</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="">Country:</label>
            <select
              className="input"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="NG">Nigeria</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="">Description:</label>
            <input
              className="input"
              placeholder="Enter a Description"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <SeerbitCheckout
            tranref={Date.now()}
            currency={currency}
            description={description}
            country={country}
            public_key={process.env.REACT_APP_PUBLIC_KEY}
            callback={callback}
            close={close}
            amount={amount}
            full_name={"Newton Imonjirie"}
            email={"newtonimonjirie@gmail.com"}
            mobile_no={"09057387000"}
            title={"Pay with SeerBit"}
            callbackurl={url}
          />
        </div>
      </div>

      <Navbar activeNav="home" />
      <ToastContainer
        className="toast-container"
        bodyClassName="toast-class"
        style={{ marginTop: 100, color: "dark" }}
        autoClose={true}
      />
    </>
  );
};

export default FundWallet;
