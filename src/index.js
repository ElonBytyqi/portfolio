// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <main className="maintenance-page">
      <div className="maintenance-card">
        <span className="maintenance-status">
          Portfolio Update
        </span>

        <h1 className="maintenance-title">
          Something better
          <br />
          is coming soon.
        </h1>

        <p className="maintenance-description">
          I'm currently improving my portfolio and adding new projects.
          The updated version will be available shortly.
        </p>

        <div className="maintenance-profile">
          <strong>Elon Bytyqi</strong>
          <span>Full Stack Developer</span>
        </div>
      </div>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);