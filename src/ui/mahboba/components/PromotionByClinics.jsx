import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Clinic logos //
import logo1 from "../../../assets/dashboard/01.png";
import logo2 from "../../../assets/dashboard/02.svg";
import logo3 from "../../../assets/dashboard/03.svg";
import logo4 from "../../../assets/dashboard/04.svg";
import logo5 from "../../../assets/dashboard/05.svg";

// Clinic information //
const clinics = [
  {
    name: "Klinik Lee Healthcare",
    percentage: 19,
    color: "#e52f83",
    logo: logo1,
  },
  {
    name: "Klinik Bandar Baru Nilai",
    percentage: 4,
    color: "#2878e8",
    logo: logo2,
  },
  {
    name: "Klinik Mediviron Giant Nilai",
    percentage: 10,
    color: "#eab308",
    logo: logo3,
  },
  {
    name: "KLINIK NILAI IMPIAN",
    percentage: 21,
    color: "#16a34a",
    logo: logo4,
  },
  {
    name: "Klinik Mediviron",
    percentage: 2,
    color: "#383554",
    logo: logo5,
  },
];

export default function PromotionByClinics() {
  const [showInfo, setShowInfo] = useState(false);

  // Data for the donut chart //
  const chartData = {
    labels: clinics.map((clinic) => clinic.name),

    datasets: [
      {
        data: clinics.map((clinic) => clinic.percentage),

        backgroundColor: clinics.map((clinic) => clinic.color),

        borderWidth: 0,

        hoverOffset: 5,
      },
    ],
  };

  // Chart settings //
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    cutout: "70%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,

        backgroundColor: "#344767",

        titleColor: "#ffffff",
        bodyColor: "#ffffff",

        padding: 10,

        displayColors: true,

        callbacks: {
          label: (context) => {
            const clinic = clinics[context.dataIndex];

            return ` ${clinic.name}: ${clinic.percentage}%`;
          },
        },
      },
    },
  };

  return (
    <section className="w-full rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-700 sm:text-xl">
          Promotion by Clinics
        </h2>

        <button
          type="button"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="See which clinics are providing you promos"
          title="Promotion information"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-lg font-semibold text-slate-500 transition hover:bg-slate-100"
        >
          !
        </button>
      </div>

      {showInfo && (
        <div className="mb-5 rounded-lg bg-blue-50 p-3 text-sm text-slate-600">
          This chart displays the promotion percentages for different clinics.
        </div>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center">
        {/* Donut Chart */}
        <div className="flex flex-col items-center lg:col-span-2">
          <div className="w-full max-w-[260px]">
            <Doughnut data={chartData} options={chartOptions} />
          </div>

          <button
            type="button"
            onClick={() => alert("More details about clinic promotions")}
            className="mt-5 rounded-lg bg-slate-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-slate-600"
          >
            More Details
          </button>
        </div>

        {/* Clinics List */}
        <div className="lg:col-span-3">
          {clinics.map((clinic, index) => (
            <div
              key={clinic.name}
              className={`flex items-center justify-between gap-3 py-4 ${
                index !== clinics.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              {/* Clinic Logo and Name */}
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <img
                    src={clinic.logo}
                    alt={clinic.name}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <span className="truncate text-sm font-medium text-slate-700 sm:text-base">
                  {clinic.name}
                </span>
              </div>

              {/* Percentage */}
              <span className="shrink-0 text-sm font-medium text-slate-500">
                {clinic.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
