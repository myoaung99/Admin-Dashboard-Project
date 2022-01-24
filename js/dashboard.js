$(".counter-up").counterUp({
  delay: 10,
  time: 1000,
});

const dateArr = [
  "Jan 1",
  "Feb 3",
  "March 5",
  "April 7",
  "May 9",
  "June 11",
  "July 13",
];
const viewCountArr = [13, 15, 12, 9, 1, 5, 2];
const orderCountArr = [12, 15, 13, 3, 1, 9, 4];

const ctx = document.getElementById("ov").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dateArr,
    datasets: [
      {
        fill: "origin",
        label: "Order Count",
        data: orderCountArr,
        backgroundColor: ["#007bff10"],
        borderColor: ["#007bff"],
        borderWidth: 1,
      },
      {
        fill: "origin",
        label: "View Count",
        data: viewCountArr,
        backgroundColor: ["#17a2b810"],
        borderColor: ["#17a2b8"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
});

let orderFromPlace = [5, 15, 4, 9, 7];
let places = ["YGN", "MDY", "NPY", "SHAN", "MGW"];

const pv = document.getElementById("pv").getContext("2d");
const pvChart = new Chart(pv, {
  type: "doughnut",
  data: {
    labels: places,
    datasets: [
      {
        label: "# of Votes",
        data: orderFromPlace,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});
