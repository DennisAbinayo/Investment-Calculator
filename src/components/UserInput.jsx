
export default function UserInput({ userInput, handleInputChange}) {
 


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            id="initial-investment"
            value={userInput.initialInvestment}
            required
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            id="annual-investment"
            value={userInput.annualInvestment}
            required
            onChange={handleInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            id="expected-return"
            value={userInput.expectedReturn}
            required
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={userInput.duration}
            required
            onChange={handleInputChange}
          />
        </p>
      </div>
    </section>
  );
}
