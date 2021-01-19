import React, { useState, useEffect } from "react";
import * as axios from "axios";
import "./LoginForm.css";

function LoginForm(props) {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const [resp, updateResp] = useState({});

  const [errorFound, toggleErrorFound] = useState("");

  const handleChange = e => {
    const { id, value } = e.target;
    setState(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmitClick = async event => {
    event.preventDefault();
    try {
      let URL = "https://api.bybits.co.uk/auth/token";
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

      updateResp(await axios.post(URL, data, config));
    } catch (error) {
      console.error(error);
      toggleErrorFound("An error occurred");
    }
  };

  useEffect(() => {
    const handleResponse = async event => {
      try {
        let URL = "https://api.bybits.co.uk/policys/details";
        let config = {
          headers: {
            environment: "mock",
            Authorization: `Bearer ${resp.data.access_token}`,
            "Content-type": "application/json"
          }
        };
        const newResp = await axios.get(URL, config);
        props.changeToData(newResp);
      } catch (error) {
        console.error(error);
      }
    };
    const errorMessages = {
      400: "Username / password not found",
      401: "Unauthorised request",
      403: "Forbidden request",
      404: "Username / password not found",
      500: "Internal server error",
      503: "Service unavailable"
    };

    if (resp.status === 200) {
      toggleErrorFound("");
      handleResponse();
    } else if (errorMessages.hasOwnProperty(resp.status)) {
      toggleErrorFound(errorMessages[resp.status]);
    } else if (resp.hasOwnProperty("status")) {
      toggleErrorFound("An error occurred");
    } else {
      return;
    }
  }, [resp, props]);

  return (
    <div className="card centred">
      <div className="card-title">Sign in</div>
      <form>
        <div>
          <label for="username">Username</label>
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
          <label for="password">Password</label>
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
          Sign in
        </button>
        <div className="error-msg">{errorFound}</div>
      </form>
    </div>
  );
}

export default LoginForm;
