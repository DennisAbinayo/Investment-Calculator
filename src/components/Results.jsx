import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  const data = calculateInvestmentResults(userInput);
  const initialInvestment =
    data[0].valueEndOfYear - (data[0].interest + data[0].annualInvestment);


  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData) => {
          const { year, interest, valueEndOfYear, annualInvestment } = yearData;

          const totalInterest =
            valueEndOfYear - (annualInvestment * year + initialInvestment);
          const totalInvestedCapital = valueEndOfYear - totalInterest


          return (
            <tr key={year} className="center">
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
