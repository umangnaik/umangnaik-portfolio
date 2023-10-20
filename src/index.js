import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from './app'
import './index.css'
import "./i18n";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}></Suspense>
    <App />
  </React.StrictMode>
);

