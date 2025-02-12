import { useState } from "react";

import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15_000,
    annualInvestment: 1_500,
    expectedReturn: 7,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  const results = inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a positive duration value.</p>
      )

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: Number(value),
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      {results}
    </>
  );
}

export default App;
