import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kharkiv" />
        <p>
          This project was created by{" "}
          <a
            href="https://jade-daifuku-97088b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Kateryna Tsykanova
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/KaterynaTs19/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
