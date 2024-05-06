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
      <h1>Web Docker Show Case</h1>
      <div className={"page-module-card"}>
        <page-module />
      </div>
      <div className={"observed-module-card"}>
        {showObservedModule && <observed-module />}
      </div>
      <button onClick={() => setShowObservedModule((value) => !value)}>
        {showObservedModule ? "Hide Observed Module" : "Show Observed Module"}
      </button>
      <p>
        to show or hide the observed module. The observed module is fetched with
        the first click and cached for the next ones.
      </p>
    </>
  );
}

export default App;
