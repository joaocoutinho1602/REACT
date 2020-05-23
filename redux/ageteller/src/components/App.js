import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import AgeStats from "./AgeStats";

function App() {
  const [date, setDate] = useState("");
  const [birthday, setBirthday] = useState("");
  const [show, setShow] = useState(Boolean);

  function changeBirthday(date) {
    setBirthday(date);
    setShow(true);
  }

  return (
    <div className="App">
      <Form className="MyForm" inline>
        <h1 className="MyText">Input your birthday</h1>
        <FormControl
          type="date"
          onChange={(e) => setDate(e.target.value)}
        ></FormControl>
        <Button onClick={() => changeBirthday(date)}>Submit</Button>
      </Form>
      {show ? (
        <div className="fade age-stats">
          <AgeStats date={birthday} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default App;
