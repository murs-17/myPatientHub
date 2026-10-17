import { NavLink } from "react-router-dom";

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
          <strong>Chat</strong>
          <input placeholder="Search..." aria-label="Search" />
        </header>

        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}