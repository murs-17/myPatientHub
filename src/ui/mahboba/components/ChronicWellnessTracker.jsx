import Chart from "react-apexcharts";

export default function ChronicWellnessTracker() {
  // chart data //
  const series = [
    {
      name: "Malaria",
      data: [80, 50, 15, 40, 100, 20],
    },
    {
      name: "Cold",
      data: [25, 40, 30, 70, 15, 65],
    },
    {
      name: "Typhoid",
      data: [30, 70, 60, 15, 20, 30],
    },
    {
      name: "Cough",
      data: [90, 15, 60, 30, 45, 25],
    },
  ];

  // chart setting //
  const options = {
    chart: {
      type: "radar",
      background: "transparent",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: -35,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
      animations: {
        enabled: true,
      },
    },

    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"],

    xaxis: {
      categories: ["2017", "2018", "2019", "2020", "2021", "2022"],
      labels: {
        show: true,
        style: {
          colors: [
            "#777777",
            "#777777",
            "#777777",
            "#777777",
            "#777777",
            "#777777",
          ],
        },
      },
    },

    yaxis: {
      show: true,
      min: 0,
      max: 120,
      tickAmount: 4,
      labels: {
        show: true,
        style: {
          colors: ["#333333"],
        },
      },
    },

    stroke: {
      width: 2,
    },

    fill: {
      opacity: 0.1,
    },

    // hover part //

    markers: {
      size: 0,
      hover: {
        size: 5,
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      fontWeight: 400,
      itemMargin: {
        horizontal: 5,
        vertical: 2,
      },
      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },

    tooltip: {
      enabled: true,
      shared: false,
      intersect: false,
      y: {
        formatter: (value) => `${value}`,
      },
    },

    // inside settings chart //
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e8e8e8",
          connectorColors: "#e8e8e8",
          fill: {
            colors: ["transparent", "transparent"],
          },
        },
      },
    },

    grid: {
      padding: {
        top: 5,
        bottom: 0,
      },
    },

    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: {
            height: 320,
          },
          legend: {
            fontSize: "12px",
            itemMargin: {
              horizontal: 3,
              vertical: 2,
            },
          },
        },
      },
    ],
  };

  return (
    <div className="w-full rounded-2xl bg-white  shadow-sm">
      <div className="min-h-[365px]">
        <h2 className="px-3 pt-3 text-xl font-bold text-gray-800">
          Chronic wellness Tracker
        </h2>

        <div className="w-full">
          <Chart
            options={options}
            series={series}
            type="radar"
            height={350}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
