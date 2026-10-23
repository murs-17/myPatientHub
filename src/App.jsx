import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import FindClinic from "./pages/FindClinic/FindClinic.jsx";
import ClinicDetails from "./pages/ClinicDetails/ClinicDetails.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Navigate to="/find-clinic" replace />}
          />
          <Route path="/find-clinic" element={<FindClinic />} />
          <Route path="/clinic-details" element={<ClinicDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
