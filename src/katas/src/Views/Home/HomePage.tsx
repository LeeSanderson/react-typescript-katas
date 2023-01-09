import logo from "./logo.svg";
import "./HomePage.styles.css";

export function HomePage() {
  return (
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <a
        className="Home-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
