import { useRef } from "react";
import { useState } from "react";
const cardTitle =
  "text-base font-medium leading-[1.625] tracking-[0.0075em] text-[#344767]";
const itemTitle = "text-sm font-medium leading-[1.5] text-[#344767]";

const RED = "#F44335";
const PISTACHIO = "#8BC34A";
const GREY = "#7b809a";
const DARK = "#344767";

const groups = [
  {
    label: "Newest",
    items: [
      {
        name: "Food",
        date: "27 March 2020, at 12:30 PM",
        amount: "- $ 2,500",
        type: "out",
      },
      {
        name: "Medicine",
        date: "27 March 2020, at 04:30 AM",
        amount: "+ $ 2,000",
        type: "in",
      },
    ],
  },
  {
    label: "Yesterday",
    items: [
      {
        name: "Appointment",
        date: "26 March 2020, at 13:45 PM",
        amount: "+ $ 750",
        type: "in",
      },
      {
        name: "MarketPlace",
        date: "26 March 2020, at 12:30 PM",
        amount: "+ $ 1,000",
        type: "in",
      },
      {
        name: "Pharmacy",
        date: "26 March 2020, at 08:30 AM",
        amount: "+ $ 2,500",
        type: "in",
      },
      {
        name: "Bookings",
        date: "26 March 2020, at 05:00 AM",
        amount: "Pending",
        type: "pending",
      },
    ],
  },
];

const config = {
  out: { icon: "arrow_downward", color: RED },
  in: { icon: "arrow_upward", color: PISTACHIO },
  pending: { icon: "priority_high", color: DARK },
};

/* تبدیل hex به rgba برای هاله‌ی هم‌رنگ آیکون */
function hexToRgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

/* غلظت هاله: بیشتر = پررنگ‌تر */
const RING_ALPHA = 0.6;
const RING_SIZE = 4;

function CircleIcon({ type }) {
  const { icon, color } = config[type];
  const [ring, setRing] = useState(false);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  return (
    <button
      ref={ref}
      type="button"
      tabIndex={0}
      // هاله همان لحظه‌ی فشردن ماوس ظاهر می‌شود
      onMouseDown={() => {
        setRing(true);
        ref.current && ref.current.focus();
      }}
      // کلیک روی جای دیگر: فوکس از دست می‌رود و هاله محو می‌شود
      onBlur={() => setRing(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent outline-none transition-[opacity,box-shadow] duration-150"
      style={{
        border: `1px solid ${color}`,
        color,
        opacity: hover ? 0.65 : 1,
        boxShadow: ring
          ? `0 0 0 ${RING_SIZE}px ${hexToRgba(color, RING_ALPHA)}`
          : "none",
      }}
    >
      <span
        className="material-icons-round leading-none"
        style={{ fontSize: 14 }}
      >
        {icon}
      </span>
    </button>
  );
}

function Transactions() {
  return (
    <div className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white text-left font-['Roboto',Helvetica,Arial,sans-serif] shadow-[0_1.25rem_1.6875rem_rgba(0,0,0,0.05)]">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 pt-6">
        <h6 className={cardTitle}>Your Transaction&apos;s</h6>

        <div className="flex items-center gap-2" style={{ color: GREY }}>
          <span
            className="material-icons-round leading-none"
            style={{ fontSize: 18 }}
          >
            date_range
          </span>
          <span className="whitespace-nowrap text-sm font-normal leading-[1.5]">
            23 - 30 March 2020
          </span>
        </div>
      </div>

      {/* groups */}
      <div className="flex flex-col gap-6 px-4 pb-6 pt-6">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-4 text-xs font-bold uppercase leading-[1.5] tracking-[0.03em] text-[#7b809a]">
              {g.label}
            </p>

            <ul className="m-0 flex list-none flex-col p-0">
              {g.items.map((t) => {
                const { color } = config[t.type];
                return (
                  <li
                    key={t.name}
                    className="mb-2 flex items-center justify-between gap-3 py-2 pr-4"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <CircleIcon type={t.type} />

                      <div className="min-w-0">
                        <p className={`truncate ${itemTitle}`}>{t.name}</p>
                        <p className="truncate text-xs leading-[1.5] text-[#7b809a]">
                          {t.date}
                        </p>
                      </div>
                    </div>

                    {/* مبلغ: هم‌رنگ آیکون، بدون تغییر با hover */}
                    <span
                      className="shrink-0 whitespace-nowrap text-sm font-medium"
                      style={{ color }}
                    >
                      {t.amount}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
