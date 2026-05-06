import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import WhatsAppFloating from "./components/WhatsAppFloat";

// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [trailOn, setTrailOn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <WhatsAppFloating />

        {/* <ToastContainer /> */}
        <Routes>
          <Route
            path="/"
            element={<Home trailOn={trailOn} setTrailOn={setTrailOn} />}
          />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
