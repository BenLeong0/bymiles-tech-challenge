import LoginForm from "./components/LoginForm/LoginForm";
import DataCard from "./components/DataCard/DataCard";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [cardState, setCardState] = useState("login");
  const [resp, setResp] = useState({});
  const [dataKey, setDataKey] = useState(0);

  const changeToData = newResp => {
    setDataKey(dataKey + 1);
    setResp(newResp);
    setCardState("data");
  };

  const changeToLogin = () => {
    setResp({});
    setCardState("login");
  };

  if (cardState === "data") {
    return <DataCard resp={resp} key={dataKey} changeToLogin={changeToLogin} />;
  } else {
    return <LoginForm changeToData={changeToData} />;
  }
}

export default App;
