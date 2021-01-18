import React, { useState } from "react";
import * as axios from "axios";
import "./LoginForm.css";

function LoginForm(props) {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const URL = "https://api.bybits.co.uk/auth/token";

  const handleChange = e => {
    const { id, value } = e.target;
    setState(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmitClick = async event => {
    event.preventDefault();
    try {
      let config = {
        headers: {
          environment: "mock",
          "Content-type": "application/json"
        }
      };

      let data = {
        username: "testuser",
        password: "EbpucVzUP5cvsYha0E9i",
        type: "USER_PASSWORD_AUTH"
      };

      const resp = await axios.post(URL, data, config);
      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card centred">
      <div className="card-title">Login</div>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
