import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Savings from "./pages/Savings";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import FundWallet from "./pages/FundWallet";
import "./App.css";
import SetPercentage from "./pages/SetPercentage";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/fund-wallet" exact component={FundWallet} />
          <Route path="/set-percentage" exact component={SetPercentage} />
          <Route path="/savings" exact component={Savings} />
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
