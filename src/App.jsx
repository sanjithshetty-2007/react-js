import React from "react";

const App = () => {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero banner " />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll enjoy
            Without the Hassle
          </h1>
        </header>
        <p>search</p>
      </div>
    </main>
  );
};

export default App;
