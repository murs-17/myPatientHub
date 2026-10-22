import SettingsNavigation from "../../components/my-settings/SettingsNavigation.jsx";
import Profile from "../../components/my-settings/Profile.jsx";
import BasicInfo from "../../components/my-settings/BasicInfo.jsx";
import ChangePassword from "../../components/my-settings/ChangePassword.jsx";
import TwoFactorAuth from "../../components/my-settings/TwoFactorAuth.jsx";
import Sessions from "../../components/my-settings/Sessions.jsx";
import DeleteAccount from "../../components/my-settings/DeleteAccount.jsx";

function MySettings() {
  return (
    <main className="w-full min-w-0 px-3 py-5 sm:px-5 lg:px-8">
      <div className="mx-auto grid w-full min-w-0 max-w-[1600px] grid-cols-1 items-start gap-5 lg:grid-cols-[235px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-7">
        {/* Left navigation */}
        <aside className="w-full min-w-0 self-start lg:sticky lg:top-0 lg:h-fit">
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
