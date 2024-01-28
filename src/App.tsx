import { useState } from "react";
import mswLogo from "./assets/msw.svg";
import mathLogo from "/math.svg";
import "./App.css";

function App() {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <div>
                <a href="#" target="_blank" rel="noreferrer">
                    <img
                        src={mathLogo}
                        className="logo"
                        alt="Vite logo"
                    />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={mswLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Math</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
