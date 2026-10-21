import SpaceshipIcon from "./icons/SpaceshipIcon";
import DocumentIcon from "./icons/DocumentIcon";
import Box3DIcon from "./icons/Box3DIcon";
import ShopIcon from "./icons/ShopIcon";
import SettingsToolIcon from "./icons/SettingsToolIcon";
import CreditCardIcon from "./icons/CreditcardIcon.jsx";

const settingsItems = [
  { label: "Profile", id: "profile", Icon: SpaceshipIcon },
  { label: "Basic Info", id: "basic-info", Icon: DocumentIcon },
  {
    label: "Change Password",
    id: "change-password",
    Icon: Box3DIcon,
  },
  { label: "2FA", id: "2fa", Icon: ShopIcon },
  { label: "Sessions", id: "sessions", Icon: SettingsToolIcon },
  {
    label: "Delete Account",
    id: "delete-account",
    Icon: CreditCardIcon,
  },
];

function SettingsNavigation() {
  const handleNavigation = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      aria-label="Account settings"
      className="sticky top-4 w-full min-w-0 self-start
        overflow-hidden rounded-xl bg-white
        shadow-[0_1.25rem_1.6875rem_rgba(0,0,0,0.05)]"
    >
      <ul className="m-0 flex list-none flex-col gap-1.5 p-4">
        {settingsItems.map(({ label, id, Icon }) => (
          <li key={id} className="m-0 p-0">
            <button
              type="button"
              onClick={() => handleNavigation(id)}
              className="flex w-full items-center gap-3
                rounded-lg px-3 py-2.5 text-left
                font-roboto text-[14px] font-normal
                leading-5 text-[#718096]
                transition-colors duration-150
                hover:bg-[#f0f2f5]
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-blue-600"
            >
              <Icon size={18} color="#344767" className="shrink-0" />

              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SettingsNavigation;
