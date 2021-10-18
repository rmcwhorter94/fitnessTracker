import { useEffect, useState } from "react";
import { Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Activities from "./components/Activities";
import Login from "./components/Login";
import Register from "./components/Register";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import BASE_URL from "./Util";

function App() {
  const [user, setUser] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return setUser(null);
    }
    const fetchUser = async () => {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser({ id: data.id, username: data.username, token });
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar setUser={setUser} user={user} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/routines">
        <Routines
          setUser={setUser}
          user={user}
          routines={routines}
          setRoutines={setRoutines}
        />
      </Route>
      <Route path="/my-routines">
        <MyRoutines
          user={user}
          setUser={setUser}
          setRoutines={setRoutines}
          routines={routines}
        />
      </Route>
      <Route path="/activities">
        <Activities setUser={setUser} user={user} />
      </Route>
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route path="/register">
        <Register setUser={setUser} />
      </Route>
    </>
  );
}

export default App;
