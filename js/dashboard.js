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
