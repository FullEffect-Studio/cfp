import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginForm from "./components/Auth/AdminLoginForm";
import CommnityWorkerLoginForm from "./components/Auth/CommnityWorkerLoginForm";
import PublicOfficerLoginForm from "./components/Auth/PublicOfficerLoginForm";
import LandingPage from "./components/LandingPage";
import ReportAProblem from "./components/report/ReportAProblem";
import "./index.css"

export const App = () => {
  return (
    <div data-scroll-container>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/signin/" element={<AdminLoginForm />} />
          <Route path="/community-worker/signin/" element={<CommnityWorkerLoginForm />} />
          <Route path="/public-officer/signin/" element={<PublicOfficerLoginForm />} />
          <Route path="report-a-problem/" element={<ReportAProblem />} />
        </Routes>
      </Router>
    </div>
  );
};
