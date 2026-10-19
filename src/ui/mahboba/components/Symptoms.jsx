import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

export default function Symptoms() {
  const months = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const values = [50, 45, 60, 60, 80, 65, 90, 80, 100];

  const data = {
    labels: months,
    datasets: [
      {
        data: values,
        borderColor: "#344767",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "#344767",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        tension: 0.4,
        fill: true,
        backgroundColor: "rgba(107,114,128,0.08)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
        callbacks: {
          title: (items) => items[0].label,
          label: (context) => `Symptoms: ${context.parsed.y}`,
        },
      },
    },

    scales: {
      x: {
        display: false,
      },

      y: {
        display: false,
        min: 40,
        max: 105,
        grace: 0,
      },
    },
  };

  return (
    <section className="w-full rounded-xl bg-white p-0 shadow-sm">
      <div className="mb-2 p-4">
        <p className="text-sm font-medium text-slate-500">Symptoms</p>

        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold font-bold text-slate-700">70%</h2>

          <span className="text-xs font-bold text-emerald-500">+3%</span>
        </div>
      </div>

      <div className="h-[120px] w-full">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}
