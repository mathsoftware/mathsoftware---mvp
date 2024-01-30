import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MathJaxContext from "better-react-mathjax/MathJaxContext";

const mathJaxConfig = {
    loader: { load: [ "input/asciimath" ] },
};

ReactDOM
    .createRoot(document.getElementById("root")!)
    .render(
        <React.StrictMode>
            <MathJaxContext config={mathJaxConfig}>
                <App />
            </MathJaxContext>
        </React.StrictMode>,
    );
