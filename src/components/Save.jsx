import React, { useState, useEffect } from "react";

export default function Save() {
  const [text, setText] = useState(
    () => JSON.parse(localStorage.getItem("text")) || ""
  );
  const [tempState, setTempState] = useState("");

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  });

  function changeState(event) {
    setTempState(() => {
      return event.target.value;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setText(tempState);
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <form>
        <input
          type="text"
          placeholder="text to save"
          onChange={changeState}
          name="text"
          value={tempState}
        />
        <button onClick={handleSubmit}>Change State</button>
      </form>
    </React.Fragment>
  );
}
