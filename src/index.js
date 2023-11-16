import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { fbconfig } from "./config";
import { initializeApp } from "firebase/app";
import "./index.css";

const app = initializeApp(fbconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="layout-container">
            <App />
        </div>
    </React.StrictMode>
);
