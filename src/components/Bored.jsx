import React, {useState, useEffect} from 'react';

function Bored() {

  const [activity, setActivity] = useState("");

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity/")
      .then(res => res.json())
      .then(
        (activity) => {
          setActivity(activity.activity);  
        }
      )
  },[]);

  let getActivity = () => {
    fetch("https://www.boredapi.com/api/activity/")
      .then(res => res.json())
      .then(
        (activity) => {
          setActivity(activity.activity);
        }
      )
  }
  return (
    <div >
         <div >
            <h2>{activity}</h2>
         </div><br />
         <button className="btn" onClick={getActivity}>Generate New Activity</button>
    </div>
  );
}

export default Bored;
