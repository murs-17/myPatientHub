import React, { useEffect, useRef, useState } from "react";
import doctorImage from "../../../assets/dashboard/doctor.jpg";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Mustafa",
    specialty: "Emergency",
    date: "Tuesday, April 5",
    day: "5",
    month: "April",
    year: "2027",
    image: doctorImage,
  },
  {
    id: 2,
    doctor: "DR. KHIRULLAH",
    specialty: "Consultation",
    date: "Friday, November 2",
    day: "2",
    month: "November",
    year: "2027",
    image: doctorImage,
  },
  {
    id: 3,
    doctor: "Dr. Sarah",
    specialty: "Cardiology",
    date: "Monday, December 10",
    day: "10",
    month: "December",
    year: "2028",
    image: doctorImage,
  },
];

const tabs = ["Days", "Months", "Years"];

export default function UpComingAppoinments() {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedTab, setSelectedTab] = useState("Months");
  const menuRefs = useRef({});
  const tabRefs = useRef({});

  useEffect(() => {
    if (openMenu !== null) {
      menuRefs.current[openMenu]?.querySelector("button")?.focus();
    }
  }, [openMenu]);

  const getDate = (appointment) => {
    if (selectedTab === "Days") {
      return `${appointment.day} ${appointment.month}`;
    }

    if (selectedTab === "Months") {
      return appointment.month;
    }

    return appointment.year;
  };

  const handleTabKeyDown = (event, tab) => {
    const currentIndex = tabs.indexOf(tab);
    let nextIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    setSelectedTab(nextTab);
    setOpenMenu(null);
    tabRefs.current[nextTab]?.focus();
  };

  const handleMenuKeyDown = (event, appointmentId) => {
    const menu = menuRefs.current[appointmentId];
    const actions = menu ? Array.from(menu.querySelectorAll("button")) : [];
    const currentIndex = actions.indexOf(document.activeElement);

    if (event.key === "Escape") {
      event.preventDefault();
      setOpenMenu(null);
      document
        .querySelector(`[aria-controls="appointment-menu-${appointmentId}"]`)
        ?.focus();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + actions.length) % actions.length;
      actions[nextIndex]?.focus();
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      actions[event.key === "Home" ? 0 : actions.length - 1]?.focus();
    }
  };

  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-700">
          Up Coming Appointments
        </h2>
      </div>

      {/* Days / Months / Years */}
      <div
        className="mb-4 flex w-full items-center rounded-xl bg-[#a9d7e8] p-1"
        role="tablist"
        aria-label="Appointment date filter"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(element) => {
              tabRefs.current[tab] = element;
            }}
            type="button"
            role="tab"
            id={`appointment-tab-${tab.toLowerCase()}`}
            aria-controls="appointment-list"
            aria-selected={selectedTab === tab}
            tabIndex={selectedTab === tab ? 0 : -1}
            onClick={() => {
              setSelectedTab(tab);
              setOpenMenu(null);
            }}
            onKeyDown={(event) => handleTabKeyDown(event, tab)}
            className={`flex-1 rounded-lg px-3 py-3 text-sm font-medium
              transition-all duration-200 focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-slate-700
              sm:text-base
              ${
                selectedTab === tab
                  ? "bg-white text-slate-700 shadow-sm"
                  : "bg-transparent text-slate-600 hover:bg-white/40"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Appointment list */}
      <div
        id="appointment-list"
        role="tabpanel"
        aria-labelledby={`appointment-tab-${selectedTab.toLowerCase()}`}
        className="flex flex-col"
      >
        {appointments.map((appointment, index) => {
          const menuId = `appointment-menu-${appointment.id}`;

          return (
            <div
              key={appointment.id}
              className={`flex items-center justify-between gap-3 py-4 ${
                index !== appointments.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              {/* Doctor information */}
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={appointment.image}
                  alt={appointment.doctor}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-slate-700">
                    {appointment.doctor}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {appointment.specialty}
                  </p>
                </div>
              </div>

              {/* Date and menu */}
              <div className="relative flex shrink-0 items-center gap-1 sm:gap-2">
                <p className="text-right text-xs text-slate-500 sm:text-sm">
                  {getDate(appointment)}
                </p>

                <button
                  type="button"
                  aria-label={`More options for ${appointment.doctor}`}
                  aria-controls={menuId}
                  aria-haspopup="menu"
                  aria-expanded={openMenu === appointment.id}
                  onClick={() =>
                    setOpenMenu(
                      openMenu === appointment.id ? null : appointment.id,
                    )
                  }
                  className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                  </svg>
                </button>

                {openMenu === appointment.id && (
                  <div
                    id={menuId}
                    ref={(element) => {
                      menuRefs.current[appointment.id] = element;
                    }}
                    role="menu"
                    aria-label={`Actions for ${appointment.doctor}`}
                    onKeyDown={(event) =>
                      handleMenuKeyDown(event, appointment.id)
                    }
                    className="absolute right-0 top-full z-50 mt-1 w-48 rounded-md border border-slate-100 bg-white py-2 shadow-lg"
                  >
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                      className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-700"
                    >
                      Action
                    </button>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                      className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-700"
                    >
                      Another action
                    </button>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => setOpenMenu(null)}
                      className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-700"
                    >
                      Something else here
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
