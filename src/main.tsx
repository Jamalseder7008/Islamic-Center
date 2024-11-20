import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from './components/Footer.tsx';
import Home from "./pages/index.tsx";
import Services from "./pages/services.tsx"
import Team from "./pages/team.tsx";
import FinancialTools from "./pages/FinancialTools.tsx";
import ImportantLinks from "./pages/ImportantLinks.tsx";
import ImportantDates from "./pages/ImportantDates.tsx";
import './index.css';
import './App.css'; // Optional: Add global styles
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/team" element={<Team />} />
        <Route path="/FinancialTools" element={<FinancialTools />} />
        <Route path="/ImportantLinks" element={<ImportantLinks />} />
        <Route path="/ImportantDates" element={<ImportantDates />} />
        <Route path="/app" element={<App />} /> {/* Add this route if you need the App component */}
      </Routes>
      <Footer /> 
    </Router>
  </React.StrictMode>
);
