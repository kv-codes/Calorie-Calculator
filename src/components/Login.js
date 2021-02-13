import React from 'react';
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();

    function handleClick(){
        history.push("/Home");
    }
  return (
    <div>
      <h1>Login here via Google OAuth, click 'submit' to sign in</h1>
      <button type = "button" onClick={handleClick}>Submit</button>
    </div>
  );
  
}
export default Login;