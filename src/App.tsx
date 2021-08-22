import React, { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [checkboxes, setCheckboxes] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  function generate() {
    let chars = "";
    let pass = "";

    if (checkboxes.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkboxes.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (checkboxes.numbers) chars += "0123456789";

    console.log(chars);

    // return pass;
  }

  function handleChange(e: any) {
    setLength(e.target.value);
  }

  function handleCheckbox(e: any) {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: !!e.target.checked,
    } as typeof checkboxes);
  }

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result">{password}</span>
        <button className="btn" id="clipboard">
          <i className="far fa-clipboard"></i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>Password length: {length}</label>
          <input
            onChange={(e) => handleChange(e)}
            type="range"
            min="8"
            max="80"
            value={length}
          />
        </div>
        <div className="setting">
          <label>Include uppercase letters</label>
          <input
            onClick={(e) => handleCheckbox(e)}
            type="checkbox"
            name="uppercase"
            defaultChecked={checkboxes.uppercase}
          />
        </div>
        <div className="setting">
          <label>Include lowercase letters</label>
          <input
            onClick={(e) => handleCheckbox(e)}
            type="checkbox"
            name="lowercase"
            defaultChecked={checkboxes.lowercase}
          />
        </div>
        <div className="setting">
          <label>Include numbers</label>
          <input
            onClick={(e) => handleCheckbox(e)}
            type="checkbox"
            name="numbers"
            defaultChecked={checkboxes.numbers}
          />
        </div>
        <div className="setting">
          <label>Include symbols</label>
          <input
            onClick={(e) => handleCheckbox(e)}
            type="checkbox"
            name="symbols"
            defaultChecked={checkboxes.symbols}
          />
        </div>
      </div>
      <button onClick={generate} className="btn btn-large" id="generate">
        Generate password
      </button>
    </div>
  );
}

export default App;
