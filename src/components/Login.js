import { useState } from "react";
import { useHistory } from "react-router-dom";
import BASE_URL from "../Util";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await response.json();
    if (info.error) {
      return setErrorMessage(info.message);
    }
    localStorage.setItem("token", info.token);
    props.setUser({
      token: info.token,
      id: info.user.id,
      username: info.user.username,
    });
    history.push("/");
  };
  return (
    <>
      <div id="credentials">
        <form onSubmit={handleSubmit}>
          <input
            id="loginUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          ></input>
          <input
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="What Art Thou Password?!"
          ></input>
          <button id="login">Login</button>
        </form>
        <p>{errorMessage}</p>
      </div>
    </>
  );
};

export default Login;
