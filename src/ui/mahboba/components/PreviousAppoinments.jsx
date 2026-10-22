import { useState } from "react";
import doctorImage from "../../../assets/dashboard/doctor.jpg";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Mustafa",
    specialty: "Emergency",
    date: "Tuesday, April 5",
    image: doctorImage,
  },
  {
    id: 2,
    doctor: "DR. KHIRULLAH",
    specialty: "Consultation",
    date: "Friday, November 2",
    image: doctorImage,
  },
  {
    id: 3,
    doctor: "Dr. Sarah",
    specialty: "Cardiology",
    date: "Monday, December 10",
    image: doctorImage,
  },
];

export default function PreviousAppointments() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-700">
          Previous Appointments
        </h2>
      </div>

      <div className="flex flex-col">
        {appointments.map((appointment, index) => (
          <div
            key={appointment.id}
            className={`flex items-center justify-between gap-3 py-4 ${
              index !== appointments.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
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

            <div className="relative flex shrink-0 items-center gap-2">
              <p className="text-right text-xs text-slate-500 sm:text-sm">
                {appointment.date}
              </p>

              <button
                type="button"
                aria-label={`More options for ${appointment.doctor}`}
                aria-expanded={openMenu === appointment.id}
                onClick={() =>
                  setOpenMenu(
                    openMenu === appointment.id ? null : appointment.id,
                  )
                }
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
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
                <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-md border border-slate-100 bg-white py-2 shadow-lg">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(null)}
                    className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Action
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpenMenu(null)}
                    className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Another action
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpenMenu(null)}
                    className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Something else here
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
