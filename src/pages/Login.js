import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="home_page login" style={{ marginTop: 150 }}>
        <h1 className="quick_header center">QuickSave</h1>
        <div className="form">
          <h2>Login</h2>
          <div className="form_wrapper">
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input className="input" type="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="">Password:</label>
              <input className="input" type="password" required />
            </div>

            <Link to="/home">
              <button className="btn">Login</button>
            </Link>

            <div className="account_exists">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
