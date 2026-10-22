import Chart from "react-apexcharts";

const AppointmentChart = () => {
  // chart data //
  const series = [
    {
      name: "Emergency",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "Eximination",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "Consultation",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "Routine Checkup",
      data: [21, 7, 25, 13, 22, 8],
    },
  ];

  // chart setting //
  const options = {
    chart: {
      type: "bar",
      stacked: true,
      height: 350,
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

    // inside settings chart //
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
        borderRadius: 8,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        fontWeight: 600,
        colors: ["#FFFFFF"],
      },
      background: {
        enabled: false,
      },
    },

    stroke: {
      show: true,
      width: 1,
      colors: ["#FFFFFF"],
    },

    xaxis: {
      categories: ["jan", "Feb.", "Mar.", "Apr.", "May", "Jun"],
      labels: {
        style: {
          fontSize: "12px",
          colors: "#373D3F",
        },
      },
      axisBorder: {
        show: true,
        color: "#E0E0E0",
      },
      axisTicks: {
        show: true,
      },
    },

    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#373D3F",
        },
      },
    },

    grid: {
      borderColor: "#E0E0E0",
      strokeDashArray: 0,
    },

    // hover part //
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      labels: {
        colors: "#373D3F",
      },
      markers: {
        width: 12,
        height: 12,
        radius: 2,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 2,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },

    tooltip: {
      enabled: true,
      shared: false,
      intersect: true,
      followCursor: false,
      theme: "light",
      y: {
        formatter: (value) => `${value}`,
        title: {
          formatter: (seriesName) => `${seriesName}:`,
        },
      },
    },

    fill: {
      opacity: 1,
    },

    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.15,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },

    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            bar: {
              columnWidth: "75%",
            },
          },
          legend: {
            fontSize: "11px",
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
          Appointment
        </h2>

        <div>
          <Chart
            options={options}
            series={series}
            type="bar"
            height={350}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentChart;
