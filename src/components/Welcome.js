import React from 'react';
import { useHistory } from "react-router-dom";

function Welcome() {
  let history = useHistory();
  
  function handleClick() {
    history.push("/Login");
  }


  return (
    <div>
      <h1>Welcome to the Calorie Calculator!</h1>
      <h2>Please sign in to begin</h2>
      <button type = "button" onClick={handleClick}>Login</button>

    </div>
  );
  
}
export default Welcome;

