// const Activities = () => {
//   return <p>Activities</p>;
// };

// export default Activities;

import { useEffect, useState } from "react";
import BASE_URL from "../Util";
// import { useHistory } from "react-router-dom";

const Activities = (props) => {
  const fetchActivities = async () => {
    const resp = props.user
      ? await fetch(`${BASE_URL}/activities`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.user}`,
          },
        })
      : await fetch(`${BASE_URL}/activities`, {
          headers: { "Content-Type": "application/json" },
        });
    const info = await resp.json();

    props.setActivities(info);
    console.log(info);
  };
  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Activities</h1>
          {props.activities.map((activity) => {
            <div className="activitiyList">
              <h2>activitiy Name:{activity.name}</h2>
              <p>Goal: {activity.goal}</p>
              <p>Creator: {activity.creatorName}</p>

              <h3>Activities</h3>
              {activities.map((activity) => {
                <div>
                  <ul>{activity.name}</ul>
                  <p>Description: {activity.description}</p>
                  <p>Duration: {activity.duration}</p>
                  <p>Count: {activity.count}</p>
                </div>;
              })}
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Activities;
