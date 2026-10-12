import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Appointment from "../pages/appointment/Appointment";
import Clinic from "../pages/clinic";
import Chat from "../pages/chat/Chat";
import Patients from "../pages/patients/Patients";
import Settings from "../pages/settings/Settings";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* Main routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/findhospital" element={<Clinic />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/searchdoctor" element={<Patients />} />
        <Route path="/settings" element={<Settings />} />


        {/* 404 - any unknown route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;