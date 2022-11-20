import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="home_page login" style={{ marginTop: 100 }}>
        <h1 className="quick_header center">QuickSave</h1>
        <div className="form">
          <h2>Register</h2>
          <div className="form_wrapper">
            <div className="form-group">
              <label htmlFor="">Username:</label>
              <input className="input" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input className="input" type="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="">Phone number:</label>
              <input className="input" type="number" required />
            </div>

            <div className="form-group">
              <label htmlFor="">Password:</label>
              <input className="input" type="password" required />
            </div>

            <Link to="/home">
              <button className="btn">Register</button>
            </Link>

            <div className="account_exists">
              <p>
                Already have an account? <Link to="/">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
