import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Login from "./pages/login/Login";
import AppLayout from "./components/AppLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={
            <AppLayout>
              <Chat />
            </AppLayout>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;