import React, { useState } from "react";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <DashboardLayout
      isSidebarOpen={isSidebarOpen}
      onToggleSidebar={toggleSidebar}
    >
      <div className="w-full h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm font-medium bg-white/50">
        [کدهای اصلی و نمودارهای شما اینجا قرار می‌گیرند]
      </div>
    </DashboardLayout>
  );
}
