import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import AppLayout from "./components/AppLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;