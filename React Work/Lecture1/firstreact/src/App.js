import React from "react";
import "./css/mycss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <Button variant="primary">Click Me</Button>
      <Button variant="secondary">Click Me</Button>
      <Alert variant="success">Successfully Completed First React Code!</Alert>
      <h1>Hello from first React Component</h1>
      <p>
        {" "}
        Hello my name is Shahmeer SP20-BCS-061, student of Comsats Lahore
        University, doing Bachelors in Computer Sciences
      </p>
    </div>
  );
}

export default App;
