import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCompact, setIsCompact] = useState(window.innerWidth < 1200);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const compact = window.innerWidth < 1200;

      setIsCompact(compact);

      if (compact) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const mainContent = document.querySelector("main");

    if (!mainContent) return;

    const handleScroll = () => {
      setIsScrolled(mainContent.scrollTop > 0);
    };

    mainContent.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((previous) => !previous);
  };

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-[#334155] font-sans antialiased overflow-hidden">
      {(!isCompact || isSidebarOpen) && <Sidebar isOpen={isSidebarOpen} />}

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Header
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          isCompact={isCompact}
          isScrolled={isScrolled}
        />

        <main className=" flex-1  min-h-0 p-6  bg-gray-100 overflow-y-scroll">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
