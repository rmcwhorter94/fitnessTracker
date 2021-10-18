import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import BASE_URL from "../Util";
// import "../CSS/myRoutines.css";

const myRoutines = (props) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPublic, setIsPublic] = useState("");

  const history = useHistory();

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.user.token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });
    const info = await resp.json();

    console.log(info);
    if (info.error) {
      setErrorMessage(info.error);
      return;
    }

    // setroutines([...routines, info]);

    props.setRoutines(info.routines);
    setName("");
    setGoal("");
    setIsPublic(!isPublic);
    history.push("/my-routines");
    setErrorMessage("");
    // history.push("/my-routines");
  };

  return (
    <div id="adding">
      <form onSubmit={handleSubmit}>
        <h1>Create a routine</h1>
        <input
          id="addingRoutines"
          placeholder="title"
          onChange={(e) => setName(e.target.value)}
          value={name}
          isPublic={isPublic}
          // onChange={() => {
          //   setIsPublic(!isPublic);
          // }}
        ></input>
        <input
          type="text"
          id="addingRoutines"
          placeholder="What is your goal?"
          onChange={(e) => setGoal(e.target.value)}
          value={goal}
          defaultChecked={isPublic}
          isPublic={isPublic}
        ></input>
        <button className="clickRoutines" type="submits">
          Create Routine
        </button>
        {/* <span>Create Routine</span> */}
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default withRouter(myRoutines);
