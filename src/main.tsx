import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from './components/Footer.tsx';
import Home from "./pages/index.tsx";
import Services from "./pages/services.tsx";
import ImportantLinks from "./pages/ImportantLinks.tsx";
import './index.css';
import './App.css';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import QuranLessons from "./pages/QuranLessons.tsx";
import Donate from "./pages/Donate.tsx";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/QuranLessons" element={<QuranLessons />} />
        <Route path="/ImportantLinks" element={<ImportantLinks />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
