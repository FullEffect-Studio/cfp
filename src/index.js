import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/main/" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
