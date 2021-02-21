import React from 'react';
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();

    function handleClick(){
        history.push("/Home");
    }
  return (
    <div>
      <h1>Please login with google to proceed</h1>
      <button type = "button" onClick={handleClick}>Login with google!</button>
    </div>
  );
  
}
export default Login;