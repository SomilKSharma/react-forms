import React, {useState} from "react"
import './App.css';
import {Login} from "./Login"
import {Register} from "./Register"

function App() {
  // get teh current form useState
  const [currForm, setCurrForm] = useState('login')

  // toggle from
  const toggleForm = (formName) => {
    setCurrForm(formName)
  }

  return (
    <div className="App">
      {
        currForm == "login"?
        <Login onFormSwitch={toggleForm} />:
        <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
