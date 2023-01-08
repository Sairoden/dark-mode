import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const localTheme = window.localStorage.getItem("theme");

function App() {
  const [theme, setTheme] = useState(localTheme || "white-theme");

  useEffect(() => {
    document.documentElement.className = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    if (theme === "white-theme") setTheme("dark-theme");
    else setTheme("white-theme");
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map(article => (
          <Article {...article} key={article.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
