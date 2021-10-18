import { useState, useEffect } from "react";
const Routines = (props) => {
  const [returnedRoutines, setReturnedRoutines] = useState([]);
  const returnRoutines = async () => {
    const getRoutines = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await getRoutines.json();
    console.log(response);
    setReturnedRoutines(response);
  };
  useEffect(() => {
    returnRoutines();
  }, []);
  return (
    <>
      {/* {props.user && <p>{props.user.username}</p>} */}

      {returnedRoutines.map((routine) => {
        return (
          <div id="Links">
            <div className="routine">
              <h1>Routine Name: {routine.name}</h1>
              <h3>Creator: {routine.creatorName}</h3>
              <h4>goal: {routine.goal}</h4>
              {routine.activities.map((activity) => {
                return (
                  <div className="activity">
                    <p>Activities: {activity.name}</p>
                    <p>Activity Description: {activity.description}</p>
                    <p>Duration: {activity.duration}</p>
                    <p>Count: {activity.count}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Routines;
