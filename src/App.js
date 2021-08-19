import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsusbscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        setUser(userAuth);
      } else {
        //logged out
      }
    });

    return unsusbscribe;
  }, []);

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
