import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Store,
  CreditCard,
  Hospital,
  Rocket,
  Files,
  Wrench,
  Menu,
  Search,
  UserCircle,
  Settings,
  Bell,
  Heart,
  Apple,
  Bot,
  HelpCircle,
  X,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import logo from "@/assets/pihub-logo.png.asset.json";
const items = [
  { label: "Dashboard", icon: Store },
  { label: "Appointments", icon: CreditCard, path: "/appointment" },
  { label: "Find Doctor", icon: Hospital },
  { label: "Find Clinic", icon: Store },
  { label: "Chat", icon: CreditCard },
  { label: "Find MarketPlace", icon: CreditCard, path: "/marketplace" },
  { label: "Find Pharmacy", icon: Rocket },
  { label: "My Dependents", icon: Files },
  { label: "My Account", icon: Wrench },
  { label: "Settings", icon: Wrench },
];
export function PatientShell({ page, children, search, onSearch }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [notice, setNotice] = useState(null);
  return (
    <div
      className={`${collapsed ? "sidebar-collapsed" : ""} ${mobile ? "sidebar-mobile-open" : ""}`}
    >
      {mobile && (
        <div className="fixed inset-0 z-20 bg-overlay md:hidden" onClick={() => setMobile(false)} />
      )}
      <aside className="patient-sidebar" aria-label="Main navigation">
        <div className="brand">
          <img src={logo.url} alt="MyPatientHUB logo" />
          <span>MyPatientHUB</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto md:hidden"
            aria-label="Close navigation"
            onClick={() => setMobile(false)}
          >
            <X />
          </Button>
        </div>
        <nav className="sidebar-nav">
          {items.map((item) => {
            const active = item.path === (page === "Appointment" ? "/appointment" : "/marketplace");
            const inner = (
              <>
                <span className="nav-icon">
                  <item.icon size={14} />
                </span>
                <span>{item.label}</span>
              </>
            );
            return item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-item ${active ? "active" : ""}`}
                onClick={() => setMobile(false)}
              >
                {inner}
              </Link>
            ) : (
              <div key={item.label} className="nav-item" aria-disabled="true">
                {inner}
              </div>
            );
          })}
        </nav>
        <div className="download-panel">
          <HelpCircle size={26} className="mb-4" />
          <p className="text-xs font-semibold">Download</p>
          <p className="mt-1 text-[10px]">MyPIHUB Mobile App</p>
          <div className="mt-3 flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              aria-label="Apple app information"
              className="flex-1"
              onClick={() => setNotice("MyPIHUB Mobile App")}
            >
              <Apple className="text-primary" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="flex-1"
              aria-label="Android app information"
              onClick={() => setNotice("MyPIHUB Mobile App")}
            >
              <Bot className="text-primary" />
            </Button>
          </div>
        </div>
      </aside>
      <div className="patient-main">
        <header className="patient-header">
          <div className="flex items-center gap-6">
            <div>
              <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                <Home size={12} />
                <span>/</span>
                <span>{page}</span>
              </div>
              <h1 className="text-sm font-bold">{page}</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              title="Toggle navigation"
              aria-label="Toggle navigation"
              onClick={() => {
                setCollapsed(!collapsed);
                setMobile(!mobile);
              }}
            >
              <Menu size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <div className="header-search mr-2">
              <Search size={14} className="absolute left-3 top-3" />
              <input
                aria-label={`Search ${page.toLowerCase()}`}
                placeholder="Type here..."
                value={search ?? ""}
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="desktop-account"
              onClick={() => setNotice("Account")}
            >
              <UserCircle size={14} />
              Log out
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Settings"
              title="Settings"
              onClick={() => setNotice("Settings")}
            >
              <Settings />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              title="Notifications"
              onClick={() => setNotice("Notifications")}
            >
              <Bell />
            </Button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="patient-footer">
          <span>
            © 2026, made with <Heart size={13} fill="currentColor" className="inline" /> by{" "}
            <strong className="text-foreground">MyPiHUB</strong> for a better web.
          </span>
          <div className="flex gap-6">
            <a href="https://www.mypihub.com/" target="_blank" rel="noreferrer">
              MyPatientHUB
            </a>
            <a href="https://www.mypihub.com/" target="_blank" rel="noreferrer">
              About Us
            </a>
            <a href="https://www.mypihub.com/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </div>
        </footer>
      </div>
      <Dialog
        open={notice !== null}
        onOpenChange={(open) => {
          if (!open) setNotice(null);
        }}
      >
        <DialogContent>
          <DialogTitle>{notice}</DialogTitle>
          <DialogDescription>
            {notice === "Notifications"
              ? "You have no new notifications."
              : notice === "Account"
                ? "You are viewing sample appointments and marketplace offers. No account is signed in."
                : notice === "Settings"
                  ? "Account settings are not included in this preview."
                  : "Mobile app downloads are not connected in this preview."}
          </DialogDescription>
          <Button variant="brand" onClick={() => setNotice(null)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
