import logo from "./logo.svg";
import "./index.styles.css";
import { useTranslation } from "react-i18next";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <a
        className="Home-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("learn.react")}
      </a>
    </header>
  );
}
