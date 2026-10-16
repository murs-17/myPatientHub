import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./Pages/dashboard/Dashboard";
import Appointments from "./Pages/appointments/Appointments";
import Chat from "./Pages/chat/Chat";
import FindClinic from "./Pages/find-clinic/FindClinic";
import FindDoctor from "./Pages/find-doctor/FindDoctor";
import FindMarketPlace from "./Pages/find-market-place/FindMarketPlace";
import FindPharmacy from "./Pages/find-pharmacy/FindPharmacy";
import MyAccount from "./Pages/my-account/MyAccount";
import MyDependents from "./Pages/my-dependents/MyDependents";
import Settings from "./Pages/settings/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/appointments" element={<Appointments />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/find-doctor" element={<FindDoctor />} />

          <Route path="/find-clinic" element={<FindClinic />} />

          <Route path="/find-market-place" element={<FindMarketPlace />} />

          <Route path="/find-pharmacy" element={<FindPharmacy />} />

          <Route path="/my-account" element={<MyAccount />} />

          <Route path="/my-dependents" element={<MyDependents />} />

          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
