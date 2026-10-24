import { useEffect, useState } from 'react'; import { Search, Menu } from 'lucide-react'; import HomeRoundedIcon from '@mui/icons-material/HomeRounded'; import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'; import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'; import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'; import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
let activeCount = 0;
/* سایدبار الان باز است؟ (عرض aside را می‌خوانیم) */ function readOpen() { const aside = document.querySelector('aside'); return aside ? aside.offsetWidth > 120 : false; }
function clickLayoutToggle() { const btn = document.querySelector('header button[aria-label="Toggle sidebar"]'); if (btn) btn.click(); }
/* کلاس body را با وضعیت واقعی سایدبار هماهنگ می‌کنیم (CSS از آن می‌خواند) */ function syncNav() { const isOpen = readOpen(); document.body.classList.toggle('fd-nav-open', isOpen); return isOpen; }
function PageHeader({ title }) { const [open, setOpen] = useState(false);
useEffect(function () { activeCount += 1; document.body.classList.add('fd-hide-layout-header');
const narrow = window.matchMedia('(max-width: 1199px)').matches;
if (narrow) {
  document.body.classList.remove('fd-nav-open');
  if (readOpen()) clickLayoutToggle();
}
setTimeout(function () { setOpen(syncNav()); }, 350);

return function () {
  activeCount -= 1;
  if (activeCount === 0) {
    document.body.classList.remove('fd-hide-layout-header');
    document.body.classList.remove('fd-nav-open');
  }
};
}, []);
function toggle() { clickLayoutToggle(); setTimeout(function () { setOpen(syncNav()); }, 350); }
const toggleIcon = open ? <Menu className="h-5 w-5 text-white" /> : <MenuOpenRoundedIcon sx={{ fontSize: 20, color: '#fff' }} />;
return ( <div className="absolute inset-x-0 top-0 z-10 flex min-h-[64px] select-none items-center justify-between gap-2 px-3 text-white sm:gap-4 sm:px-6"> {/* چپ: breadcrumb و عنوان */} <div className="flex min-w-0 flex-1 items-center gap-4"> <div className="flex min-w-0 flex-col"> <div className="mb-1 flex items-center gap-2 text-xs text-white/80"> <HomeRoundedIcon sx={{ fontSize: 14, color: '#fff' }} /> <span>/</span> <span className="truncate">{title}</span> </div> <h1 className="truncate text-sm font-semibold capitalize text-white">{title}</h1> </div>
    <button
      type="button"
      aria-label="Toggle sidebar"
      onClick={toggle}
      className="hidden items-center rounded-md p-1 min-[1200px]:flex"
    >
      {toggleIcon}
    </button>
  </div>

  {/* راست */}
  <div className="flex shrink-0 items-center gap-2 sm:gap-3">
    <div className="hidden h-8 w-36 items-center rounded-md border border-slate-300 bg-white px-2.5 md:flex md:w-40">
      <Search className="h-3.5 w-3.5 shrink-0 text-slate-600" />
      <input
        type="text"
        placeholder="Type here..."
        aria-label="Search"
        className="ml-2 w-full min-w-0 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400"
      />
    </div>

    <a href="/authentication/sign-in/basic" className="flex items-center gap-1.5 whitespace-nowrap text-white">
      <AccountCircleRoundedIcon sx={{ fontSize: 14, color: '#fff' }} />
      <span className="hidden text-[11px] font-medium sm:inline">Log out</span>
    </a>

    <button
      type="button"
      aria-label="Toggle sidebar"
      onClick={toggle}
      className="flex items-center rounded-md p-1 min-[1200px]:hidden"
    >
      {toggleIcon}
    </button>

    <button type="button" aria-label="Settings" className="flex items-center">
      <SettingsRoundedIcon sx={{ fontSize: 15, color: '#fff' }} />
    </button>

    <button type="button" aria-label="Notifications" className="flex items-center">
      <NotificationsRoundedIcon sx={{ fontSize: 15, color: '#fff' }} />
    </button>
  </div>
</div>
); }
export default PageHeader;