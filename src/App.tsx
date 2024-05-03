import "./App.css";
import { useState } from "react";

function App() {
  const [showObservedModule, setShowObservedModule] = useState(false);
  return (
    <>
      <div>
        <a href="https://www.reply.com/open-reply/de/" target="_blank">
          <img src="/reply.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <page-module />
        {showObservedModule && <observed-module />}
      </div>
      <button onClick={() => setShowObservedModule((value) => !value)}>
        Click me
      </button>
      <p>
        to show or hide the observed module. The observed module is fetched with
        the first click and cached for the next ones.
      </p>
    </>
  );
}

export default App;
