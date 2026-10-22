import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t-0 border-slate-200/60 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] font-medium text-slate-500 select-none">
      {/* Left Section: Copyright */}
      <div className="flex flex-wrap items-center justify-center gap-1 order-2 sm:order-1 text-center">
        <span>© {new Date().getFullYear()}, made with</span>

        <FavoriteIcon
          sx={{
            fontSize: 14,
            color: "#7b809a",

            verticalAlign: "middle",
          }}
        />

        <span>by</span>

        <a
          href="https://www.mypihub.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-slate-600 hover:text-slate-800 transition-colors"
        >
          &nbsp;MyPiHUB&nbsp;
        </a>

        <span>for a better web.</span>
      </div>

      {/* Right Section: Footer Links */}
      <nav className="flex flex-wrap items-center justify-center gap-5 order-1 sm:order-2">
        <a
          href="https://www.mypihub.com/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-slate-700 transition-colors"
        >
          MyPatientHUB
        </a>

        <a
          href="https://www.mypihub.com/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-slate-700 transition-colors"
        >
          About Us
        </a>

        <a
          href="https://www.mypihub.com/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-slate-700 transition-colors"
        >
          Blog
        </a>
      </nav>
    </footer>
  );
}
