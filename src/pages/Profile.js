import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

const Profile = () => {
  const history = useHistory();

  const logout = function () {
    history.push("/");
  };

  return (
    <>
      <div className="home_page" style={{ marginTop: 150 }}>
        <div className="home_header">
          <h1>My Profile</h1>
        </div>
        <hr style={{ marginBottom: 20 }} />
        <div className="form_wrapper">
          <div className="form-group">
            <label htmlFor="">Given Name:</label>
            <input className="input" defaultValue="Newton" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="">Family Name:</label>
            <input className="input" defaultValue="Imonjirie" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="">Middle Name:</label>
            <input className="input" defaultValue="Odigie" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="">Email:</label>
            <input
              className="input"
              defaultValue="newtonimonjirie@gmail.com"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Contact:</label>
            <input
              className="input"
              defaultValue="+2349057387046"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Date of Birth:</label>
            <input className="input" defaultValue="1953-06-07" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="">Home Address:</label>
            <input
              className="input"
              defaultValue="35 WESLEY STREET GARDENS, AJAH, LAGOS"
              type="text"
            />
          </div>

          <div className="btn_row">
            <button onClick={() => {}}>Edit Profile</button>

            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
      <Navbar activeNav="profile" />
    </>
  );
};

export default Profile;
