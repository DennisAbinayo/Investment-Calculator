import calcLogo from "../assets/investment-calculator-logo.webp"

export default function Header() {
  return (
    <header id="header">
        <img src={calcLogo} alt="investment calculator logo showing a money bag" />
        <h1>Investment Calculator</h1>
    </header>
  )
}