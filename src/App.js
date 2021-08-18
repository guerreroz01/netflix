import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage setUser={setUser} />
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/test"></Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
