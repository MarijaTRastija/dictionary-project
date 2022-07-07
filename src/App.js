import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            {" "}
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/marija-trzic-rastija-711009175/"
              target="_blank"
              rel="noreferrer"
              alt="Linkedin link"
            >
              Marija Tržić Rastija,
            </a>{" "}
            it is{" "}
            <a
              href="https://github.com/MarijaTRastija/dictionary-project"
              target="_blank"
              rel="noreferrer"
              alt="GitHub link"
            >
              open-sourced on GitHub,
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://melodious-taiyaki-b1fd8e.netlify.app/"
              target="_blank"
              rel="noreferrer"
              alt="Netlify link"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
