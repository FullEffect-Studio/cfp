import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { App } from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss"




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>
);
