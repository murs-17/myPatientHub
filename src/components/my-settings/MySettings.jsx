import SettingsNavigation from "../../components/my-settings/settingsNavigation.jsx";
import Profile from "./Profile";
import BasicInfo from "./BasicInfo";
import ChangePassword from "./ChangePassword";
import TwoFactorAuth from "./TwoFactorAuth";
import Sessions from "./Sessions";
import DeleteAccount from "./DeleteAccount";

function MySettings() {
  return (
    <main className="w-full min-w-0 px-3 py-5 sm:px-5 lg:px-8">
      <div className="mx-auto grid w-full min-w-0 max-w-[1600px] grid-cols-1 items-start gap-5 lg:grid-cols-[235px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-7">
        {/* Left navigation */}
        <aside className="w-full min-w-0 self-start">
          <SettingsNavigation />
        </aside>

        {/* Right content */}
        <div className="flex w-full min-w-0 flex-col gap-5">
          <Profile />

          <BasicInfo />

          <ChangePassword />

          <TwoFactorAuth />

          <Sessions />

          <DeleteAccount />
        </div>
      </div>
    </main>
  );
}

export default MySettings;
