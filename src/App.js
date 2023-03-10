import { React, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginForm from "./components/Auth/AdminLoginForm";
import CommnityWorkerLoginForm from "./components/Auth/CommnityWorkerLoginForm";
import PublicOfficerLoginForm from "./components/Auth/PublicOfficerLoginForm";
import LandingPage from "./components/LandingPage";
import ReportAProblem from "./components/report/MyReportAProblem";
import "./index.scss";
import "leaflet/dist/leaflet.css";
import SocialWorkerPage from "./components/pages/success/social_worker/SocialWorkerPage";

export const ThemeTogglerContext = createContext(null);

export const App = () => {
  const [darkmode, setDarkMode] = useState(null)
  return (
    <div data-scroll-container>
      <ThemeTogglerContext.Provider value={{darkmode, setDarkMode}}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/signin/" element={<AdminLoginForm />} />
            <Route
              path="/community-worker/signin/"
              element={<CommnityWorkerLoginForm />}
            />
            <Route
              path="/public-officer/signin/"
              element={<PublicOfficerLoginForm />}
            />
            <Route path="/report-a-problem/" element={<ReportAProblem />} />
            <Route path="/success/social-worker/" element={<SocialWorkerPage />} />
          </Routes>
        </Router>
      </ThemeTogglerContext.Provider>
    </div>
  );
};
