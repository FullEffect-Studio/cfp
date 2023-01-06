import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginForm from "./components/Auth/AdminLoginForm";
import LandingPage from "./components/LandingPage";
import "./index.css"

export const App = () => {
  return (
    <div data-scroll-container>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="auth/admin/signin/" element={<AdminLoginForm />} />
        </Routes>
      </Router>
    </div>
  );
};
