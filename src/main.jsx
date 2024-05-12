import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Sitebar from "./components/Sitebar.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx"; // Asosiy sahifa komponentini import qilingan
import Exit from "./pages/Exit.jsx";
import Percent from "./pages/Percent.jsx";
import Part from "./pages/Part.jsx";
import Email from "./pages/Email.jsx";
import Bell from "./pages/Bell.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";
import List from "./components/List.jsx";
import Payment from "./components/Payment.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex  justify-between m-auto  bg-[#252836] w-[100%] h-[100%] rounded-[16px] ">
        <Sitebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/percent" element={<Percent />} />
            <Route path="/part" element={<Part />} />
            <Route path="/email" element={<Email />} />
            <Route path="/bell" element={<Bell />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/exit" element={<Exit />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
