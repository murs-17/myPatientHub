import { NavLink, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  ["▦", "Dashboard", "/dashboard"],
  ["▤", "Appointments", "/appointments"],
  ["♙", "Find Doctor", "/doctor"],
  ["▣", "Find Clinic", "/clinic"],
  ["▣", "Chat", "/chat"],
  ["◈", "Find MarketPlace", "/marketplace"],
  ["♧", "Find Pharmacy", "/pharmacy"],
  ["▤", "My Dependents", "/dependents"],
  ["⚒", "My Account", "/profile"],
  ["⚙", "Settings", "/settings"],
];

export default function AppLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentItem =
    menuItems.find((item) => item[2] === location.pathname);

  const pageTitle = currentItem?.[1] ?? "MyPatientHUB";

  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-brand">🏥 MyPatientHUB</div>

        <nav className="app-nav">
          {menuItems.map(([icon, label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              <span className="nav-icon" aria-hidden="true">
                {icon}
              </span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <div className="app-topbar-left">
            <span className="app-breadcrumb">
              ◈ &nbsp;/&nbsp; {pageTitle}
            </span>
            <strong>{pageTitle}</strong>
          </div>

          <div className="app-topbar-right">
            <label className="app-global-search">
              <span aria-hidden="true">⌕</span>
              <input placeholder="Type here..." aria-label="Search" />
            </label>

            <button
              className="app-topbar-link"
              type="button"
              onClick={() => navigate("/login")}
            >
              ◉ Log out
            </button>

            <button
              className="app-topbar-icon"
              type="button"
              aria-label="Settings"
              title="Settings"
              onClick={() => navigate("/settings")}
            >
              ⚙
            </button>

            <button
              className="app-topbar-icon"
              type="button"
              aria-label="Notifications"
              title="Notifications"
              onClick={() => window.alert("No new notifications.")}
            >
              ♟
            </button>
          </div>
        </header>

        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}