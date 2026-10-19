import { NavLink, useLocation } from "react-router-dom";

const menuItems = [
  ["Dashboard", "/dashboard"],
  ["Appointments", "/appointments"],
  ["Find Doctor", "/doctor"],
  ["Find Clinic", "/clinic"],
  ["Chat", "/chat"],
  ["Find MarketPlace", "/marketplace"],
  ["Find Pharmacy", "/pharmacy"],
  ["My Dependents", "/dependents"],
  ["My Account", "/profile"],
  ["Settings", "/settings"],
];

export default function AppLayout({ children }) {
  const location = useLocation();
  const isChat = location.pathname === "/chat";

  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-brand">MyPatientHUB</div>

        <nav className="app-nav">
          {menuItems.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <strong>{isChat ? "Chat" : menuItems.find(
            ([, path]) => path === location.pathname
          )?.[0] || "MyPatientHUB"}</strong>

          <div className="app-topbar-actions">
            <input placeholder="Search..." aria-label="Search" />
            <button type="button" onClick={() => window.location.href = "/login"}>
              Log out
            </button>
            <NavLink to="/settings" aria-label="Settings" title="Settings">
              ⚙️
            </NavLink>
            <button type="button" aria-label="Notifications" title="Notifications">
              🔔
            </button>
          </div>
        </header>

        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}