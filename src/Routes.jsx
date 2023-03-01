import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DetailsSingleItem = React.lazy(() => import("pages/DetailsSingleItem"));
const Loggedinn = React.lazy(() => import("pages/Loggedinn"));
const Dekstop = React.lazy(() => import("pages/Dekstop"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dekstop" element={<Dekstop />} />
          <Route path="/loggedinn" element={<Loggedinn />} />
          <Route path="/detailssingleitem" element={<DetailsSingleItem />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
