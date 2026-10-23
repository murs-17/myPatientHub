import React from "react";
import { Search, Menu } from "lucide-react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";

export default function Header({
  onToggleSidebar,
  isSidebarOpen,
  isCompact,
  isScrolled,
  isOverlay,
}) {
  return (
    <header
      className={`relative z-10 w-full select-none transition-all duration-200 ${
        isOverlay
          ? "bg-transparent border-0 shadow-none rounded-none"
          : isScrolled
            ? "bg-white/95 rounded-xl shadow-md border border-slate-200/60"
            : "bg-transparent border-0"
      }`}
    >
      <div className="min-h-[64px] px-6 flex items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-6 min-w-0">
          {/* Breadcrumb - Dashboard title removed */}
          <div className="flex items-center gap-2 pt-3 text-slate-500 text-xs whitespace-nowrap">
            <HomeRoundedIcon
              sx={{ fontSize: 14, color: "#7b809a" }}
            />

            <span className="text-slate-400">/</span>

            <span className="text-slate-600">FindClinic</span>
          </div>

          {/* Menu Button */}
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
            className="hidden min-[1200px]:flex items-center gap-0.5 p-1 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <div className="relative flex items-center">
              {isSidebarOpen ? (
                <Menu className="w-5 h-5" />
              ) : (
                <MenuOpenRoundedIcon
                  sx={{ fontSize: 20, color: "#344767" }}
                />
              )}
            </div>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="hidden sm:flex items-center w-36 md:w-40 h-8 px-2.5 border border-slate-300 rounded-md bg-white">
            <Search className="w-3.5 h-3.5 text-slate-600 shrink-0" />

            <input
              type="text"
              placeholder="Type here..."
              aria-label="Search"
              className="w-full min-w-0 ml-2 bg-transparent outline-none text-xs text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Log Out */}
          <a
            href="/authentication/sign-in/basic"
            className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 whitespace-nowrap"
          >
            <AccountCircleRoundedIcon
              sx={{ fontSize: 14, color: "#344767" }}
            />

            <span className="text-[11px] font-medium">Log out</span>
          </a>

          {/* Compact Sidebar Toggle */}
          {isCompact && (
            <button
              type="button"
              aria-label="Toggle sidebar"
              onClick={onToggleSidebar}
              className="flex items-center justify-center p-1 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
            >
              {isSidebarOpen ? (
                <Menu className="w-5 h-5" />
              ) : (
                <MenuOpenRoundedIcon
                  sx={{ fontSize: 20, color: "#344767" }}
                />
              )}
            </button>
          )}

          {/* Settings */}
          <button
            type="button"
            aria-label="Settings"
            className="flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <SettingsRoundedIcon
              sx={{ fontSize: 15, color: "#344767" }}
            />
          </button>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <NotificationsRoundedIcon
              sx={{ fontSize: 15, color: "#344767" }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}