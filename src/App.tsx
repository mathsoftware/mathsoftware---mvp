import { useState } from "react";
import mswLogo from "./assets/msw.svg";
import mathLogo from "/math.svg";
import "./App.css";

function App() {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <div>
                <a href="/" target="_blank">
                    <img
                        src={mathLogo}
                        className="logo"
                        alt="Math Logo"
                    />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img
                        src={mswLogo}
                        className="logo react"
                        alt="MSW Logo"
                    />
                </a>
            </div>
            <h1>Math</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
