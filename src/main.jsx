// Import React and ReactDOM from the appropriate packages
import React from "react";
import ReactDOM from "react-dom/client";

// Import your main App component and CSS file
import App from "./App";
import "./index.css";

// Use ReactDOM.createRoot to render your app
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap your App component in React.StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
