import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ReyhanaHeader from "./ReyhanaHeader";
import ReyhanaSidebar from "./ReyhanaSidebar";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCompact, setIsCompact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const checkScreen = () => {
      const compact = window.innerWidth < 1200;

      setIsCompact(compact);

      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    checkScreen();
    handleScroll();

    window.addEventListener("resize", checkScreen);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkScreen);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((previous) => !previous);
  };

  const pageTitle =
    location.pathname === "/clinic-details"
      ? "Clinic Details"
      : "Find Clinic";

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Desktop sidebar */}
      {!isCompact && (
        <ReyhanaSidebar isOpen={isSidebarOpen} />
      )}

      {/* Compact sidebar overlay */}
      {isCompact && isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={closeSidebar}
        >
          <div
            className="h-full w-[250px]"
            onClick={(event) => event.stopPropagation()}
          >
            <ReyhanaSidebar isOpen={true} />
          </div>
        </div>
      )}

      {/* Page content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="min-w-0 flex-1">
          <Outlet
            context={{
              Header: ReyhanaHeader,
              onToggleSidebar: toggleSidebar,
              isSidebarOpen,
              isCompact,
              isScrolled,
              pageTitle,
            }}
          />
        </main>
      </div>
    </div>
  );
}